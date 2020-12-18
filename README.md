# demo-react-django
A demo web application for selected React components collected from various projects.

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

**Developed using:**

**Windows Subsystem for Linux (WSL)**
* https://docs.microsoft.com/en-gb/windows/wsl/install-win10 (2020-12-01)

**Visual Studio Code on Windows using WSL**
* https://code.visualstudio.com/docs/remote/wsl (2020-12-01)

*Add to .vscode/settings.json*
<pre>
{
  "files.associations": {
    "*.js": "javascriptreact"
  },
  // Set the default
  "editor.formatOnSave": false,
  // Enable per-language
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "python.formatting.provider": "black",
  "python.formatting.blackArgs": [
    "-l 60",
  ],
  "[python]": {
    "editor.formatOnSave": true
  },
  "python.linting.enabled": true,
  "python.linting.pylintArgs": ["--disable-msg", "E1101"],
}
 </pre>

*VSCode extensions*
* Remote - WSL (ms-vscode-remote.remote-wsl)
* ESLint (dbaeumer.vscode-eslint)
* Prettier (esbenp.prettier-vscode)
* Python (ms-python.python)

**PostgreSQL**
* https://www.postgresql.org/download/linux/ubuntu/ (2020-12-01)

**Virtual environment wrapper**
* https://medium.com/@aaditya.chhabra/installing-virtualenvwrapper-for-python-3-4-on-ubuntu-a1af6c8603a2 (2020-12-01)

**React**
* https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm (2020-12-01)

**Django**
* https://docs.djangoproject.com/en/3.1/intro/tutorial01/ (2020-12-01)

**Django REST with React**
* https://www.valentinog.com/blog/drf/ (2020-12-01)

**Material UI**
* https://material-ui.com/ (2020-12-02)

**ESLint**
* https://www.npmjs.com/package/eslint (2020-12-03)

**Prettier**
* https://prettier.io/docs/en/install.html (2020-12-03)
* https://prettier.io/docs/en/integrating-with-linters.html (2020-12-03)

**Black**
* https://github.com/psf/black (2020-12-03)

**i18next**
* https://react.i18next.com/latest/using-with-hooks (2020-12-03)
 
**Redux**
* https://redux.js.org/ (2020-12-03)
* https://react-redux.js.org/introduction/quick-start (2020-12-03)

**Tests**
* Django: https://docs.djangoproject.com/en/3.1/topics/testing/ (2020-12-18)
* React:
   * Chai: https://www.chaijs.com/ (2020-12-18)
   * Enzyme: https://github.com/enzymejs/enzyme (2020-12-18)
   * Mocha: https://mochajs.org/ (2020-12-18)
