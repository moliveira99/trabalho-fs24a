
//Dando um id para meus usuários. Inclusão via POST.
let users = [];

const UserController = {
    createUser: (req,res) => {
        const {username, email} = req.body;

        //Para verificar se o email ou nome já existem
        if(users.some(u => u.username === username || u.email === email)){
            return res.status(400).json({message: 'Username or email already exists'});
        }

        //Para verificar se já email ou senha vazio
        if(!username || !email){
            return res.status(400).json({message: 'Username or email are required'});
        }

        const newUser = {id: users.length + 1, username, email};
        users.push(newUser);
        res.status(201).json(newUser);
    },

    getUsers: (req,res) => {
        res.json(users);
    },

    
    getUserById: (req,res) => {
        const userId = parseInt(req.params.id);
        const userIndex = users.findIndex(user => user.id === userId);
        if(userIndex !== -1){
            const deletedUser = users.splice(userIndex,1);
            res.json(deletedUser)[0];
        }else{
            res.status(404).json({message: "User not found"});
        }
    },

    deleteUserById: (req, res) => {
        const userId = parseInt(req.params.id);
        
        const newArray = users.filter(user => user.id !== userId);
        
        if (newArray.length < users.length) {
          users = newArray;
          res.status(204).json();
        } else {
          res.status(404).json({ message: 'User not found' });
        }
    },

    updateUserById: (req, res,) => {
        const userId = parseInt(req.params.id);
        const {username, email } = req.body;
        const userIndex = users.findIndex(user => user.id === userId);
        if(userIndex !== -1){
            users[userIndex].username = username;
            users[userIndex].email = email;
            res.json(users[userIndex]);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    }

}

export default UserController;