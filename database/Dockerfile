FROM mariadb:10.3.22

ENV MYSQL_DATABASE=main_db
ENV MYSQL_USER=root
ENV MYSQL_ROOT_PASSWORD=Yakov777

COPY ./database-main-schema.sql /docker-entrypoint-initdb.d/database-main-schema.sql
