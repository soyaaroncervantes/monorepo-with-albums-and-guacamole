# Projects Albums
Este repo es para mostrar las diferentes estructuras que puede haber al utilizar componentes, módulos o bibliotecas en una aplicación.

Para este ejemplo se utilizará *Angular*, ya que el CLI es fácil de crear desde componentes hasta bibliotecas.

> Cabe recalcar que no por utilizar Angular como herramienta de desarrollo, significa que no podamos aplicar la misma estructura para aplicaciones que utilicen una herramienta diferente.
>
>La finalidad de este proyecto es ver la eficiencia y eficaz de construir aplicaciones web con diferentes técnicas.

<hr/>

### Proyecto
> Se necesitará tener instalado [Node](https://nodejs.org/en/download/package-manager/), para poder correr el proyecto.

La manera más fácil de correr el proyecto es clonandolo por _https_ o _ssh_, después se debe acceder a la carpeta del proyecto e instalar las dependencias.
```
cd monorepo-with-albums-and-guacamole && yarn;
```
ó
```
cd monorepo-with-albums-and-guacamole && npm install;
```

### Correr proyectos
La manera más fácil de hacerlo es utilizando los comandos de la tabla de abajo, por default se abrirá el proyecto en una nueva pestaña de su navegador predeterminado:

Proyectos | Comando | Puerto
------------ | ------------- | -------------
Monolito Albums | `npm run monolith:start` | localhost:4202
Módulos Albums | `npm run modules:start` | localhost:4201
Monorepo Albums | `npm run start` | localhost:4200
