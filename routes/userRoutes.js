import express from 'express';
import UserController from '../controllers/UserControllers.js'

const router = express.Router();


router.post('/', UserController.createUser)
router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUserById)
router.put('/:id', UserController.updateUserById)
router.delete('/:id', UserController.deleteUserById)

router.get('/', (req,res)=>{
    res.send('Welcome to Homepage');
});






export default router;