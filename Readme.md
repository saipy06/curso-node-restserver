# Notas:


Comandos de git para levantar el proyecto

```
$ git init            // para inicializar el proyecto en git

$ git add .           // para agregar todo el contenido de la carpeta en git

$ git commit -m "Primer Commit"   // realiza una marca de aseguramiento con un mensaje "primer commit"



--- Para levantar los modificados
$ git add .
$ git commit -m "Readme agregado"
$ git push



-- Para recuperar archivos o carpetas
$ git checkout -- .


-- Para darle una version al proyecto
$ git tag -a v1.0.0 -m "Fin seccion 8"
$ git push --tags


--- Despues de bajar se debe correr el siguiente comando
$ npm install   (para instalar los modulos despues de recuperar)



```








