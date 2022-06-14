# Programação Web III
# Turma 842 | Vem ser tech | Web Full Stack

### Requirements:
- [Node.js LTS](https://nodejs.org/en/download/)
- [nvm (optional)](https://github.com/nvm-sh/nvm)
- optional [Docker](https://www.docker.com/)

### Agenda
1. [x] Tipos de Webservice (SOAP, REST, GRAPHQL, GRCP)
2. [x] Introdução ao RESTFUL
3. [x] Modelagem baseade em Recursos
4. [x] Mapeamento do vebos (métodos) HTTP para manipulação de recursos
5. [x] Instalação e Uso de Cliente HTTP (postman / insomnia / outro)
6. [x] Consultas (GET, HEAD)
7. [x] Comandos (POST, PUT, DELETE, PATCH)
8. [ ] Autorização e Autenticação (JWT)

### To spin up Postgres
```shell
docker run --name postgres-repair-shop -e POSTGRES_PASSWORD=letscode -d 5432:5432 postgres
```

### To run psql inside the container
```shell
docker exec -it postgres-repair-shop psql -U postgres
```

### Steps to setup database
```shell
CREATE DATABASE repairshop;

CREATE TABLE VEHICLE(
  ID SERIAL PRIMARY KEY     NOT NULL,
  NAME           TEXT    NOT NULL,
  AGE            INT     NOT NULL,
  OWNER        CHAR(50)
);

INSERT INTO VEHICLE (NAME,AGE,OWNER) VALUES ('Palio', 10, 'João');

SELECT * FROM vehicle;
```
