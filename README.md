## About

This repo is scaffolding for your django project with InertiaJs as frontend.

## Installation

- Press the "Use this template" button at the top of this repo to create a new repo with the contents of this skeleton.

```bash
git clone https://github.com/vendor/project
```

Start Docker

```bash
docker compose up -d
```

- Generate `SECRET_KEY`

```bash
python manage.py shell -c 'from django.core.management import utils; print(utils.get_random_secret_key())'
```

- Replace `SECRET_KEY` in `settings.py` from `core` directory

- Build Assets

```bash
npm install && npm run dev
```

- Create app

```bash
django-admin startapp <appname> apps/<appname>
```

- for production make sure `DEV_MODE` and `DEBUG` is disabled in `settings.py`

## Router

use `$route` to access your route

add app name to `JS_ROUTES_INCLUSION_LIST` in `settings.py`

add `app_name = '<replace-with-app-name>'` in `<app>\urls.py`

path for InertiaJs `resources\js\utils\route.js`

## License

The Scaffolding is open-sourced software licensed under the [BSD license](LICENSE).
