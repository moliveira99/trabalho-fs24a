# 📚Atarefado
Este projeto envolve a criação de um backend para gerenciar usuários e tarefas com operações CRUD e um sistema de permissões utilizando [JWT](https://jwt.io/) para autenticação e autorização.

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
   1. Inicie o MongoDB:
     ```sudo service mongod start```

   3. Acesse o shell do MongoDB:
     ```mongo```

   5. Crie o banco de dados:
     ```use nome_do_seu_banco_de_dados```

**5. Inicie o servidor:**
   ```bash
   npm run dev
   ```

*Você pode testar o seu CRUD de usuários utilizando um cliente HTTP, como Postman ou Insomnia.*

# 📘Documentação da API
A documentação da API pode ser acessada através do [Swagger](https://swagger.io/). Para acessar a documentação, inicie o servidor e abra o seguinte URL no seu navegador:

```
http://localhost:4000/api-docs
```

# 🤝Contribuição
Sinta-se à vontade para abrir [issues](https://github.com/moliveira99/trabalho-fs24a/issues) e [pull requests](https://github.com/moliveira99/trabalho-fs24a/pulls) para contribuir com este projeto.

# ✍️Autores
- [moliveira99](https://github.com/moliveira99), [marcosaureliosl](https://github.com/marcosaureliosl), [JoaoPedroGiffoni](https://github.com/JoaoPedroGiffoni), [daviport](https://github.com/daviport), [linengmg](https://github.com/linengmg) 

# 📜Licença
Este projeto está licenciado sob a licença GNU GPLv3 - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
