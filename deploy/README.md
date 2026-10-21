# Block public repository metadata

The public site currently deploys a Git checkout. Its `.git` directory must
never be served. A robots.txt rule does not prevent access.

On the production server, install the rule:

```sh
sudo install -d -m 755 /etc/nginx/snippets
sudo install -m 644 deploy/nginx/block-repository.conf /etc/nginx/snippets/weplace-block-repository.conf
sudo install -m 644 deploy/nginx/security-headers.conf /etc/nginx/snippets/weplace-security-headers.conf
```

Add this line inside **each** Nginx `server {}` block serving the site,
including HTTP, HTTPS, and any www/default virtual host serving this directory:

```nginx
include /etc/nginx/snippets/weplace-block-repository.conf;
include /etc/nginx/snippets/weplace-security-headers.conf;
```

Check the full configuration before reloading:

```sh
sudo nginx -t && sudo systemctl reload nginx
bash deploy/check-repository-access.sh https://weplace.my
```

If a CDN caches these paths, purge its cached `/.git/*` responses after applying
the origin fix. Verify aliases separately. Future deployments run the public
access check and fail if Git metadata is accessible.

## Artifact deployment migration

The workflow now packages a fixed allowlist of public files on the GitHub runner.
It no longer runs Git on the web server. `rsync --delete-delay` removes old files,
including the exposed `.git` and `.github` folders, from `DEV_PATH`. `.well-known`
is preserved for certificate challenges and app association files.

Before running it:

- Confirm `DEV_PATH` is the dedicated site document root, not a shared directory.
  Move any required server-only files outside it; unlisted files will be removed.
- Set `DEV_KNOWN_HOSTS` to the server's SSH host key verified through the hosting
  console or another trusted channel. The workflow fails closed without it.
- Ensure the deployment user owns the document root and can run `rsync`.
- Install the Nginx snippets from a checkout outside the document root first.
  They are intentionally excluded from the public artifact.

Run `python3 deploy/build-public.py dist` to inspect the artifact locally.
Do not run `git pull` inside the served directory after migrating.

## Remaining account-level controls

The Google Maps JavaScript API key is intentionally visible to browsers. Restrict
its allowed HTTP referrers to the production website and restrict its APIs to only
those used by the map in Google Cloud. Repository edits cannot verify or apply
those account settings. The baseline CSP deliberately permits current inline
scripts/styles; a strict script allowlist with hashes needs further compatibility
work. Configure HTTPS redirect and HSTS on the HTTPS server/CDN after checking
all hostnames; neither is implied by these snippets.

Treat previously reachable source and history as disclosed. Review the entire
Git history for credentials; revoke and replace any exposed credentials at
their issuing services. Removing them from the current revision does not
revoke them or erase previous exposure.
