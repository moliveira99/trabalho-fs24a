import express from 'express';
import userRouter from "./routes/userRoutes.js"


const app = express();

const PORT = 3001;

app.use(express.json());
app.use("/", userRouter);
app.use("/user", userRouter);



//Escutar na nossa porta o servidor
app.listen(PORT, ()=>{
    console.log(`Server is runnin on port ${PORT}`);
})

