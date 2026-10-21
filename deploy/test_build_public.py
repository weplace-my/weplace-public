import importlib.util
import pathlib
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('builder', pathlib.Path(__file__).with_name('build-public.py'))
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)


class PublicArtifactTest(unittest.TestCase):
    def test_packages_public_assets_and_excludes_private_files(self):
        with tempfile.TemporaryDirectory() as temp:
            root = pathlib.Path(temp) / 'source'
            root.mkdir()
            files = ['index.html', 'assets/js/site.js', 'assets/.env',
                     'assets/site.js.map', 'assets/private.pem', '.git/config',
                     '.github/workflows/deploy.yml', 'deploy/config.txt',
                     'assets/.DS_Store', 'qr/index.html']
            for name in files:
                path = root / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text('fixture')
            original = builder.ROOT
            try:
                builder.ROOT = root
                output = pathlib.Path(temp) / 'public'
                builder.build(output)
                published = sorted(str(p.relative_to(output)) for p in output.rglob('*') if p.is_file())
                self.assertEqual(published, ['assets/js/site.js', 'index.html', 'qr/index.html'])
                with self.assertRaises(ValueError):
                    builder.build(root)
                (root / 'assets/leak.js').symlink_to(root / '.git/config')
                with self.assertRaises(ValueError):
                    builder.build(pathlib.Path(temp) / 'symlink-output')
            finally:
                builder.ROOT = original


if __name__ == '__main__':
    unittest.main()
