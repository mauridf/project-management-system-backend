# Backend - Sistema de Gerenciamento de Tarefas
## Descrição
Este é o backend do sistema de gerenciamento de tarefas. O backend foi desenvolvido com
Node.js, utilizando o framework Express, e conecta-se a um banco de dados Posgre para persistência
de dados.
## Tecnologias Utilizadas
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Axios para requisições HTTP
## Endpoints
### Tarefas
- `GET /api/tarefas`: Lista todas as tarefas.
- `POST /api/tarefas`: Cria uma nova tarefa.
- `PUT /api/tarefas/{id}`: Atualiza uma tarefa existente.
- `DELETE /api/tarefas/{id}`: Deleta uma tarefa.
### Projetos
- `GET /api/projetos`: Lista todos os projetos cadastrados.
- `POST /api/projetos`: Cria um novo projeto.
- `PUT /api/projetos/{id}`: Atualiza um projeto existente.
- `DELETE /api/projetos/{id}`: Deleta um projeto.
## Como Rodar
1. Clone este repositório.
2. Instale as dependências:
```bash
npm install
```
3. Configure o banco de dados no arquivo `config\config.json`.
4. Inicie o servidor:
```bash
npm start
```
## Autor
- Maurício Dias de Carvalho Oliveira
