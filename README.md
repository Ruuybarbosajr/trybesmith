# Boas vindas ao repositório do Trybesmith

API utilizando a arquitetura MSC (model-service-controller). É possível realizar as operações se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão. API RESTful utilizando TypeScript.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Instalação** para saber como implantar o projeto.

### 🔧 Instalação

> É necessário ter Docker na sua máquina local para executar os seguintes comandos.

- Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`).

- Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

- Use o comando `docker exec -it trybesmith bash`.
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Use comando `npm start` na raiz do projeto.
- Ele vai subir sua API na porta `3000`

## 🛠️ Construído com

* [Express](https://expressjs.com/pt-br/)
* [Node](https://nodejs.org/pt-br/docs/)
* [Sequelize](https://sequelize.org/)

