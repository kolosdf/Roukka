# Roukka
Proyecto saas

1. Tener instalados python, pip y postgresql (yo tengo las versiones python 3.7.9, pip 20.2 y postgresql 10)
2. Acceder a la carpeta del proyecto Roukka e instalar los paquetes necesarios para el proyecto, para esto ejecutar el comando
    pip install -r requirements.txt
    Entre a la carpeta srcgui y corra el comando npm install
3. En la carpeta inicial se encontrará un archivo llamado secrets.json COPIELO a la carpeta raiz del proyecto (como si simplemente sacara el archivo de la carpeta). Ahi usted configurará los datos de su bd como lo configuró al instalar Postgresql.
En mi caso, mi usuario es postgres, contraseña 123 y el puerto es el 5132. EL NOMBRE DE LA BASE DE DATOS ES EL MISMO PARA TODOS
4. Entre a pgAdmin4 y cree una nueva base de datos con el nombre Roukka
5. Haga las migraciones 
python manage.py makemigrations

6. Migrelas
python manage.py migrate_schemas

7. Acceda a la base de datos desde pgAdmin 4, cree un nuevo script con el codigo SQL que hay en el archivo scripts.txt de la carpeta inicial y corra el script
8. NO MODIFIQUE EL SETTINGS.PY SIN AVISAR ANTES
9. si va a instalar nuevos paquetes actualice el requeriments.txt con el comando 
pip freeze > requirements.txt
10. NO ELIMINE O MODIFIQUE LA CARPETA INCIAL
11. Revisen el .gitignore y verifique que funciona, por lo tanto no se deberian subir las carpetas de migraciones, el secrets.json suyo o el pycache
12. Hacer uso de un ambiente es de su elección https://medium.com/@m.monroyc22/configurar-entorno-virtual-python-a860e820aace
CUALQUIER DUDA SE LE AYUDA POR VIDEOLLAMADA
