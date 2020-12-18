# demo-react-django
A demo/showcase web application for selected React components collected from various projects. See wiki for useful links.

 **Instructions**
 
 Assumes that relevant software (python, pip, virtualenv, npm, postgres) is/will be installed. More descriptive version TBD if requested...
 
 1. Clone project
 2. Create and work on a virtual environment
 3. Create a PostgreSQL database (see "default" in settings.py DATABASES)
 4. In "frontend" run ``npm install`` and ``npm run dev``
 5. In "backend" run ``pip install -r requirements.txt``, ``python manage.py makemigrations``, ``python manage.py migrate`` and ``python manage.py runserver``
 6. Open a browser and go to ``http://localhost:8000/``

**Running tests**
* Django: Run ``python manage.py test`` in "backend"
* React: Run ``npm test`` in "frontend"
* Note: Some tests (e.g MainLayout, Timeline) produce [SyntaxError: The string did not match the expected pattern.] Not sure why but everything _seems_ to work...
