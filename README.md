## _boilerplate ⚙️

_Hace unos ayeres los proyectos se resolvían solo con un poco de HTML, CSS, jQuery, PHP, MySQL, para ser subido a un servidor compartido por FTP. Actualmente existe un amplio abanico (cagadero) de tecnologías para el diseño y desarrollo web..._

**-Frontend**
- Vue
- React
- Angular
- Polymer ...

**-Backend**
- Python
- Ruby
- Go
- Node.js ...

**-Base de Datos**
- SQL
- NoSQL ...

**-Administración de Servidores**
- AWS
- Azure
- Digital Ocean
- Google Cloud ...

_La banda que comienza en este mundo, se enfrenta con que aprender tantas tecnologías resulta difícil (un cagadero) y agotador (pinshis ojeras). Esta iniciativa busca aplicar la **Programación Orientada a Componentes** al Diseño Web, con lenguajes esenciales (HTML, CSS, JS y PHP- seguro dirás, PHP no es esencial, abajo dejo mi opinión respecto a esto--), ayudándonos de herramientas tecnológicas actuales como Node.js, Gulp, Sass y ES6._

### Comenzando 🚀

_ Clonar o descargar el repositorio en algún lugar (Documentos, Escritorio) e ingresar por medio de terminal al folder._
```
desktop:~$ git clone https://github.com/nombre-de-usuario/repositorio
```
Mira **Despliegue ** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_Que Aplicaciones y Task manager necesitas para instalar y cómo instalarlas_
```
[Node.js](https://nodejs.org/es/)
[Gulp](https://gulpjs.com/) -- De forma global
```
### Instalación 🔧

_Una vez que estés dentro del directorio, instala las dependencias con el comando:_

```
_boilperplate:~$ npm installl
```
### Estructura de proyecto  🛠️

_A diferencia de otros  Task manager, este no genera una carpeta de destino (app, dist) con la finalidad de no rehacer un proceso, y subir el proyecto de forma más simple. Estas son las carpetas generadas._

 - 📁_boilerplate
	 - 📁 app 
		 - 📂 components
		 - 📂 helpers
		 - 📂 pages
		 - 📂 store
	 - 📁 assets
		- 📂 img
	 - 📂 css
		 - 📂 components
		 -  📂 helpers
		 - 📝 main.scss
	 - 📂 js
		- 📂 components
		- 📝 app.js
	 - 📝 main.css
	 - 📝 app.js
	 - 📝 index.php

### Descripción de carpetas  📂

📂 app

* Contiene la lógica a nivel PHP de la web, app-web, app,  site... mil y un nombres . Contiene 4 carpetas que se dividen en:
	
	📂 components :  Son widgets, (pedazo de código, que contienen html, css y javascript - interacción), que sirven para resolver alguna tarea en la aplicación.
	
	 📂 helpers :  Puede contener alguna función que nos ayude a dar formato a la fecha , función de búsqueda, que no es precisamente un componente ya que no tiene representación visual.
	 
	 📂 pages : Contiene las páginas de nuestra aplicación o "vistas".
	 
	 📂 store : La conexión a base de datos. 

📂 assets :
	
 - Contiene los recursos del proyecto, imágenes, videos, audios ... etc. Se pueden agregar carpetas a manera de organizar el proyecto.
	
	📂 img : Contiene las imágenes del proyecto.
	
    '*' 📂 fonts : Contiene la o las tipografías personalizadas para el proyecto (Esta carpeta no está , al igual que videos, sonido.Esto puede agregarse si el proyecto lo requiere). 

📂 css :

 - Contiene la hoja de estilos ( 📝 main.scss ), en la cual se incluirán los "Partials" de SCSS , lo cual nos regresara solo una hoja de estilos al procesar (Sección de Build) y esta será la que estará en el proyecto.
 
	 📂 components :  Cumple con las misma filosofía de la carpeta app, en esta podemos crear los estilos de cada sección por separado, para tener un mayor control.
	 
	 📂 helpers :  Puede contener los estilos generales del sitio, el reset.

📂 js :

 - Contiene los scripts del proyecto.
 
	 📂 components :  Contiene la lógica a nivel javascript del proyecto.
	 
	 📝 app.js : En este archivo se importan los módulos a modo de generar solo un script js
	 
Los siguientes archivos se encuentran en la raíz del proyecto, estos son los generados unas vez procesados los archivos dentro de las carpetas css y js ... esto es por medio del comando gulp (ver sección Build).
	
	 📝 main.css  - Contiene todos los estilos del proyecto.
	 📝 app.js - Contine todas las funciones javascript del proyecto.
	 📝 index.php - Archivo principal del proyecto.
	 
### Build 🔨

_Ejecutar en consola el comando gulp, esto lo que hace es correr las tareas para fusionar los js y scss para entregarnos en un solo archivo el js y el css, se puede crear un archivo ".gitignore"  en la raíz del proyecto y en este excluir las carpetas de node_modules, css y js. Para después hacer el **Deploy**._

```
📂 _boilerplate
		boilerplate:~$ gulp
```

### Deploy 📦
En construcción
---


### ¿ Por qué PHP?  ❗❗

¡Qué PHP está muerto! ¡Es malo, es lento! ¡No tiene futuro¡ Y bla bla bla.

No se saquen de onda... Sí hay futuro, PHP está vivo. Muchas empresas  y personas lo utilizan, actualmente está evolucionado (PHP7), tiene mayor seguridad, velocidad, rendimiento ¡va pa´rriba! Échate un clavado y busca chamba con PHP y saldrá bastante, y la documentación es muchaaaaaa.

Casi toda la web esta  está hecha en PHP, la mayor parte de CMS están en PHP, como Wordpres, Joomla, Drupal, October CMS, así como los gestores de contendido más populares, además, se enriqueció el ecosistema con los frameworks como Symfony, Laravel que han ayudado a mejorar la programación con PHP, es cierto no será el mejor lenguaje de programación, pero es complicado erradicarlo de la web, ya está muy colocado.

PHP nos permite trabajar programación orientada objetos (OOP); Modelo, Vista Controlador (MCV); Programación estructurada y base de datos.

No creo que exista un buen o mal lenguaje, finalmente cada uno tiene un propósito, lo importante es que te sientas a gusto y puedas emplear dicha funcionalidad del lenguaje en proyectos, tal vez no es indispensable como lo escribí arriba, pero será un plus.

PHP / 2008 - 2019

  ![php desde el 2008](https://media.giphy.com/media/dXpY3Gyhk6oXXpUXVn/giphy.gif)



