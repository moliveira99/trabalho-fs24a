

# 📚Atarefado

Este projeto envolve a criação de um backend para gerenciar usuários e tarefas com operações CRUD e um sistema de permissões utilizando JWT para autenticação e autorização.

# ✅Pré-requisitos
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)

# 💾Instalação

**1. Clone o repositório:**

   ```bash
   git clone https://github.com/moliveira99/trabalho-fs24a.git
   cd trabalho-fs24a
   ```

**2. Instale as dependências:**

   ```bash
   npm install
   ```

**3. Crie um arquivo `.env` na raiz do projeto.**

**4. Adicione as seguintes variáveis de ambiente:**

   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/nome_do_seu_banco_de_dados
   JWT_SECRET=códigoSecretoJWT
   ```

**5. Crie o banco de dados MongoDB:**

   - Inicie o MongoDB:
     ```bash
     sudo service mongod start
     ```
   - Acesse o shell do MongoDB:
     ```bash
     mongo
     ```
   - Crie o banco de dados:
     ```javascript
     use nome_do_seu_banco_de_dados
     ```

**5. Inicie o servidor:**
   ```bash
   npm run dev
   ```

*Você pode testar o seu CRUD de usuários utilizando um cliente HTTP, como Postman ou Insomnia.*

# 📖Como Usar

1. **Criar um Novo Usuário (Create)**:

   - Faça uma requisição HTTP POST para a rota correspondente à criação de usuários (`/api/users`), enviando os dados do usuário no corpo da requisição no formato JSON. Por exemplo:

     ```
     POST http://localhost:4000/api/users
     Content-Type: application/json

     {
         "nome": "Nome do Usuário",
         "email": "usuario@email.com",
         "senha": "senha123",
         "papel": "USER"
     }
     ```

2. **Listar Todos os Usuários (Read)**:

   - Faça uma requisição HTTP GET para a rota correspondente à obtenção de todos os usuários (`/api/users`). Por exemplo:
     ```
     GET http://localhost:4000/api/users
     ```

3. **Obter Detalhes de um Usuário por ID (Read)**:

   - Faça uma requisição HTTP GET para a rota correspondente à obtenção de detalhes de um usuário específico (`/api/users/:id`), substituindo `:id` pelo ID do usuário desejado. Por exemplo:
     ```
     GET http://localhost:4000/api/users/5f87753d9d65e61610b8b870
     ```

4. **Atualizar Informações de um Usuário por ID (Update)**:

   - Faça uma requisição HTTP PUT para a rota correspondente à atualização de um usuário específico (`/api/users/:id`), substituindo `:id` pelo ID do usuário que deseja atualizar, e enviando os dados atualizados no corpo da requisição no formato JSON. Por exemplo:

     ```
     PUT http://localhost:4000/api/users/5f87753d9d65e61610b8b870
     Content-Type: application/json

     {
         "nome": "Novo Nome do Usuário",
         "email": "novoemail@email.com",
         "senha": "novasenha123"
     }
     ```

5. **Remover um Usuário por ID (Delete)**:

- Faça uma requisição HTTP DELETE para a rota correspondente à remoção de um usuário específico (`/api/users/:id`), substituindo `:id` pelo ID do usuário que deseja remover. Por exemplo:
  ```
  DELETE http://localhost:4000/api/users/5f87753d9d65e61610b8b870
  ```

Certifique-se de ajustar as URLs e os dados enviados conforme necessário para corresponder à configuração específica da sua aplicação. E lembre-se de verificar os retornos das requisições para garantir que as operações CRUD estejam funcionando conforme esperado.


## Estrutura do Projeto

```plaintext
Atarefado/
├── controllers/
│   ├── AuthController.js
│   ├── TaskController.js
│   └── UserController.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── userRoutes.js
├── services/
│   ├── AuthService.js
│   ├── TaskService.js
│   └── UserService.js
├── app.js
├── package.json
└── README.md
```
````

## Rotas da API

```
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
```

### Autenticação

- **POST** `/api/auth/login`: Autentica o usuário e retorna um token JWT.

### Usuários

- **POST** `/api/users`: Cria um novo usuário.
- **GET** `/api/users`: Lista todos os usuários (somente ADMIN).
- **GET** `/api/users/:id`: Obtém os detalhes de um usuário específico.
- **PUT** `/api/users/:id`: Atualiza as informações de um usuário.
- **DELETE** `/api/users/:id`: Remove um usuário.

### Tarefas

- **POST** `/api/tasks`: Cria uma nova tarefa.
- **GET** `/api/tasks`: Lista todas as tarefas.
- **GET** `/api/tasks/:id`: Obtém os detalhes de uma tarefa específica.
- **PUT** `/api/tasks/:id`: Atualiza as informações de uma tarefa.
- **DELETE** `/api/tasks/:id`: Remove uma tarefa.

## Documentação da API

A documentação da API pode ser acessada através do Swagger. Para acessar a documentação, inicie o servidor e abra o seguinte URL no seu navegador:

```
http://localhost:4000/api-docs
```

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para contribuir com este projeto.

## Autores

- [Nosso Nome](https://github.com/seu-usuario)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```

```
