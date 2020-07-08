# FormCreator

Este proyecto fue generado [Angular CLI](https://github.com/angular/angular-cli) versión 9.1.7.

## Descripción

El presente proyecto corresponde a un desarrollo de frontend implementado en el framework AngularJS (versión 9.1.7). Acá se desarrolla la creación dinámica de un formulario con tres componentes: Texto, Fecha y Rango

► Texto: Despliega un campo para diligenciar un texto específico definido por el usuario (si se desea incluir este texto no podrá ser vacío). El campo de texto es codificado para evitar posibles problemas con caracteres especiales

► Fecha: Se dispone de un selector de Angular-Material para establecer la fecha. Se muestra la fecha actual como valor por defecto.

► Rango: Un Slider de Angular-Material permite generar un valor entre 1 y 10 con saltos de 2.5

## Uso

1) Seleccione los campos que tendrá el formulario (texto, Fecha y Rango)
2) Complete la información en cada componente
3) Envíe la información
 → Se desplegará un nuevo componente con la información introducida
 → puede revisar la información histórica consignada en la presente sesión en el link Ver Historial (cada entrada posee un identificador único basado en el tiempo de creación (resolución en milisegundos))
4) Cualquier campo no seleccionado para diligenciar mostrará un valor Not Defined por defecto


## Tecnologías utilizadas
- Angular CLI
- Angular Material (https://material.angular.io/)
- Bootstrap (https://getbootstrap.com/)
- Git (y Github para manejo de repositorio y versionado)

## entorno de codificación
- vsCode

## Para ejecutar
Versión Producción: Acceder a la ruta /dist/formCreator/ y ejecutar el archivo index.html (no funciona por problemas de CORS en Firefox)
Versión Desarrollo: En terminal o Command prompt sobre la ruta raíz del proyecto ejecutar ```{ ng serve }``` o ```{ npm start }```
