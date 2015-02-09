# atletiblue
Proyecto IISS

Francisco José Macías Periñán
Javier Vargas Gerona
Diego Godoy Poce

Introducción

Este proyecto es realizado para el equipo de fútbol sala Atleti Blue, que juega la liga Boroleague, que ha sido organizada por alumnos del colegio Nuestra Señora del Pilar de Jerez de la Frontera.
Se trata de realizar un nuevo portal web que le de imágen al equipo y que pueda ofrecer la actualidad tanto de resultados como crónicas de los partidos que disputa cada fin de semana. Así como galería de imágenes, información sobre la plantilla y la clasificación de la liga.
Actualmente el equipo no dispone de página web.

Objetivos y Alcance

el objetivo general es la creación de un nuevo portal web. Dicho portal web debe alcanzar varios objetivos asociados, para cubrir todas las necesidades del equipo y realizar un proyecto completo.

Objetivos Específicos
ObjE01: En el portal web se emplearán herramientas como son HTML y CSS, así como archivos JSON y la base de datos Mongolab, donde se almacenarán distintas informaciones como puede ser la clasificación de la liga.

ObjE02: Deberá aportar información sobre el equipo, resultados y crónicas de los partidos. 

ObjE03: Se deberá respetar los colores del equipo para el diseño del portal web.

ObjE04: Se incluye un carrusel de fotos para hacer el portal web mas atractivo y cercano al usuario que visita la página web. Habrá fotos tanto de la plantilla como de los partidos que se vayan disputando.

Organización
El equipo de trabajo se ha organizado de tal forma que la comunicación ha sido bastante fluida, ya que el equipo consta de solo tres miembros y por tanto la división del trabajo no ha resultado complicada. Cada página del portal web ha sido realizada por un miembro diferente del equipo, aunque todos han participado en todas y cada una de las partes del portal web, aportando ideas y soluciones a los problemas que iban surgiendo con el avance del portal web.

Gestión de Riesgos

Riesgo detectado: 


Identificación:  Actualizar el portal web semanalmente                                                                                                            
Análisis:  Dado el ámbito de acción del equipo se considera una probabilidad media.
Planificación:  Se dispone de una base de datos para el fácil manejo de los datos del portal web.
Seguimiento:    El administrador del portal web debe encargarse semanalmente de tenerlo actualizado, ya que se disputan partidos cada fin de semana, y no realizar este seguimiento tiene el riesgo asociado de que el portal caiga en desuso. 

Análisis de Requerimientos

Actores del Proyecto

 Usuarios generales
Podrán visualizar el contenido del portal web, contactar con el equipo y visualizar imágenes.
 Administrador
Es el encargado de actualizar la base de datos de mongolab y tener actualizado el portal web.



Requisitos de interfaz externa
A continuación se van analizar cada uno de los requisitos relativos a las entradas y salidas del software.

Interfaces de usuarios
El sitio web deberá tener una estructura clara, ordenando el contenido y las funciones de la aplicación en pestañas o apartados que abarquen todas las funcionalidades disponibles.
 El sitio web deberá posibilitar la visualización de contenido multimedia.



Interfaces con el hardware

Los usuarios deberán disponer de un ordenador que posea una tarjeta de red o una tarjeta de red inalámbrica y un punto de acceso que les permita una conexión a Internet para poder acceder al portal web.


Interfaces con el software
Los usuarios necesitarán la utilización de un navegador web para que el portal web pueda ser visualizado, no siendo necesario el uso de uno específico debido a que el portal web está adaptado para poder ser visualizado en la mayoría de los navegadores disponibles.



Interfaces de comunicaciones
La comunicación entre el cliente y el servidor, consiste en una comunicación de petición y respuesta. Estas se efectuarán con el protocolo HTTP y serán enviadas del cliente/servidor con el protocolo TCP/IP.



Requisitos de seguridad
Los datos de la aplicación solo podrán ser modificados por aquellas personas autorizadas para ello.


Requisitos de eficiencia

Requisitos de espacio
El portal web se alojará en un servidor, se debe tener en cuenta el espacio de dicho servidor para el correcto funcionamiento.


Requisitos de rendimiento
Las respuestas a las peticiones de los usuarios externos se deberá generar en un tiempo razonable.


Restricciones del diseño
 El diseño de la aplicación debe estar orientado hacia la facilidad de uso y una rápida localización de las opciones o funcionalidades, para que pueda ser accesible a cualquier usuario.


Restricciones de base de datos
Será necesaria la utilización de una base de datos para poder almacenar toda la información necesaria para todas las funcionalidades y servicios que ofrece el portal web. Hemos optado por almacenar toda la información en Mongolab.

Atributos de sistema de software
Para salvaguardar la integridad de los datos en una base de datos Mongolab es importante establecer mecanismos y herramientas de control de la integridad sin necesidad de una supervisión por parte del usuario.
El mantenimiento será llevado a cabo por el administrador del portal web.


Roles de negocio
En el proyecto del portal web realizado para el equipo Atleti Blue se distinguen dos roles diferenciados que podrán interactuar con la página web. Por un lado el administrador de la web,  que será el encargado de insertar noticias, imágenes...  
Por otro lado está el grupo de usuarios que tienen acceso a la web y pueden tanto visitar la página para visualizar el contenido estático, como para en ponerse en contacto con el equipo, así como acceder a noticias y observar la actualidad del equipo. 

Diseño de la Interfaz de Usuario
Para el diseño de la interfaz de usuario se ha optado por un encabezado con el nombre del equipo y al lado una foto del equipo durante un partido. Se ha colocado el menú de navegación en la parte alta de la pantalla, el cual se mantiene fijado a medida que se realiza el scroll sobre el portal.
A continuación de la cabecera se sitúa el contenido de la página, en el caso de la pantalla principal se opta por que aparezca principalmente información acerca de el mejor jugador y el máximo goleador del equipo hasta el momento. A su derecha, el resultado del último partido disputado con su correspondiente enlace hacia la crónica.
Mas abajo se distinguen dos bloques:

 El primero, y que se encuentra a la izquierda, es un bloque de noticias que contendrá las tres últimas noticias que han sido insertadas hasta el momento en el portal. Se ofrece el comienzo de la noticia como texto introductorio.
El segundo, a la derecha del bloque de noticias descrito en el punto anterior, se encuentra la clasificación de la liga hasta la última jornada, con distintos datos como pueden ser los puntos hasta la fecha, goles a favor, en contra...

Por último se ofrece un pie de página, que contiene un enlace hacia el twitter del equipo.

#Implementación del Sistema
Entorno Tecnológico

El proyecto del portal web se ha realizado con HTML y CSS como así se ha exigido en la rubrica a seguir del proyecto. Se está trabajando en el entorno de desarrollo Cloud9, ya que ofrece la posibilidad de trabajar en la nube, y por tanto trabajar todos los miembros del grupo a la vez sin ninguna posibilidad a que se produzcan conflictos. 
Además, se está utilizando el sistema de control de versiones GitHub. 

Pruebas del Sistema
Se han realizado numerosas pruebas para comprobar el correcto funcionamiento del portal web, con la intención de buscar posibles errores que entorpezca la experiencia del usuario y que pudiera hacer perder calidad al software. A continuación se comentan las pruebas realizadas divididas en diferentes bloques. 

Pruebas Funcionales
Hemos dividido las pruebas funcionales en varios subgrupos:

Pruebas exploratorias: Nos hemos puesto en la piel del usuario, probando todas las opciones a las que tiene acceso. Estas pruebas han sido realizas sobre la última versión del proyecto.
Pruebas de regresión: Cada vez que hemos realizados cambios que afectaran al funcionamiento general del sistema hemos reutilizado las pruebas, para evitar que un pequeño cambio provocara errores en los diferentes módulos, errores comunes que hemos encontrado y resuelto con éxito, han sido los diferentes cambios en la base de datos realizado a lo largo del proyecto.
Pruebas de compatibilidad: Al ser una aplicación web, las pruebas que hemos realizado en este apartado consiste en la comprobación del correcto funcionamiento de la web en diferentes resoluciones, a continuación se muestran algunas capturas de pantalla:

Pruebas unitarias

En main.js se intenta asegurar que ha cargado todos los equipos de la clasificación:

En noticias.js se intenta verificar si redirige bien a la crónica del último partido:


Para la instalación de la aplicación en la web hemos optado por usar el servicio gratuito que ofrece "Hostinger", que ofrece alojamiento web gratuito. En nuestra caso hemos utilizado el administrador de archivos para subir el proyecto al completo a la FTP. Para ello, tan solo tenemos que abrir el administrador de archivos (figura 2) y arrastrar todo nuestro proyecto a la misma.
 
 Dado que hemos seguido la estructura que proporciona yeoman, el index.html, no se encuentra en el directorio raíz, sino que está en el directorio "app". Esto provoca que al entrar en el dominio elegido (en este caso atletiblue.hol.es) aparezca la estructura de carpetas que forman el proyecto, y para cargar la web implementada habría que pinchar sobre la carpeta "app". 
 Para solucionar este problema, hemos hecho una redirección, de manera que la url "atletiblue.hol.es" se redigirá automáticamente a "atletiblue.hol.es/app", de esta formá se cargará el archivo index.html de manera directa.


Conclusiones

Realizar el trabajo en equipo nos está enseñando la dificultad de organizar, repartir y planificar el trabajo entre 3 personas, aunque poniendo todos de nuestra parte hemos podido sobreponernos a esa dificultad y realizar el proyecto de manera armónica entre todos. 
Todos los integrantes han adquirido reforzado conocimientos sobre HTML, JSON, CSS, LESS y AngularJS, así como la utilizacion del framework BootStrap, Yeoman y Grunt.
