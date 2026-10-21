"""Package only explicitly approved public files, never the repository itself."""
import pathlib
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = (
    'index.html', 'index2.html', 'robots.txt', 'sitemap.xml', 'weplace.pdf',
    'assets', 'vendors', 'child-safety', 'delete-account', 'guide',
    'privacy', 'qr', 'security', 'tnc',
)
EXTENSIONS = {
    '.html', '.css', '.js', '.json', '.xml', '.txt', '.pdf', '.webmanifest',
    '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.ico',
    '.woff', '.woff2', '.ttf', '.eot', '.otf', '.mp4', '.webm',
}


def build(destination):
    destination = pathlib.Path(destination).resolve()
    if destination == ROOT or destination in ROOT.parents or destination.exists():
        raise ValueError('Use a new output directory outside the source content')
    for name in PUBLIC:
        source = ROOT / name
        files = sorted(source.rglob('*')) if source.is_dir() else [source]
        for file in files:
            relative = file.relative_to(ROOT)
            if any(part.startswith('.') for part in relative.parts):
                continue
            if any(ROOT.joinpath(*relative.parts[:index]).is_symlink()
                   for index in range(1, len(relative.parts) + 1)):
                raise ValueError(f'Symlinks cannot be published: {relative}')
            if not file.is_file() or file.suffix.lower() not in EXTENSIONS:
                continue
            target = destination / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(file, target)
    if not (destination / 'index.html').is_file():
        raise ValueError('Missing homepage')


if __name__ == '__main__':
    build(sys.argv[1])
