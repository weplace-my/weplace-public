const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('map labels treat API-provided HTML as text', async () => {
  const maliciousName = '<img src=x onerror=alert(document.domain)>';
  const labels = [];
  const canvas = { closest: () => null, classList: { toggle() {} } };
  const context = {
    URLSearchParams, Map, console,
    window: { location: { search: '' }, setTimeout() {} },
    document: {
      addEventListener() {},
      querySelector: selector => selector === '#community-map-canvas' ? canvas
        : selector.includes('google-maps-api-key') ? { content: 'fixture-key' } : null,
      createElement: tag => ({ tagName: tag }),
      head: { appendChild: script => script.onload() },
    },
    fetch: async () => ({ ok: true, json: async () => ({ locations: [{ name: maliciousName, latitude: 3, longitude: 101 }] }) }),
    google: { maps: {
      Map: class { getZoom() { return 9; } addListener() {} },
      Marker: class { addListener() {} }, Size: class {}, Point: class {},
      Animation: { DROP: 1 },
      InfoWindow: class { constructor({ content }) { labels.push(content); } },
    } },
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('assets/js/index.js', 'utf8'), context);
  await vm.runInContext('initCommunityMap()', context);
  assert.equal(labels.length, 1);
  assert.equal(labels[0].tagName, 'strong');
  assert.equal(labels[0].textContent, maliciousName);
  assert.equal(labels[0].innerHTML, undefined);
});
