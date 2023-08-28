# Utiliza una imagen base de MySQL
FROM mysql

# Variables de entorno para configurar la base de datos
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=arespetshop_db

# Copia el archivo de volcado SQL al directorio /docker-entrypoint-initdb.d/
COPY arespets_wp561.sql /docker-entrypoint-initdb.d/dump.sql

# Puerto en el que se ejecutará el contenedor
EXPOSE 3306