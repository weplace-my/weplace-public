#!/usr/bin/env bash
set -eu

base_url="${1:-https://weplace.my}"
for path in /.git/config /.git/HEAD /.git/index /.git/packed-refs /.git/objects/info/packs /.github/workflows/deploy.yml /.env /.DS_Store /deploy/README.md; do
  status="$(curl --silent --show-error --path-as-is --connect-timeout 10 --max-time 20 \
    --output /dev/null --write-out '%{http_code}' "${base_url%/}${path}")"
  case "$status" in
    403|404) printf 'Blocked (%s): %s\n' "$status" "$path" ;;
    *) printf 'FAIL: %s returned HTTP %s; expected 403 or 404\n' "$path" "$status" >&2; exit 1 ;;
  esac
done
