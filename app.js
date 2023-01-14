const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static('Public'));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '/Views/home.html'));
});

app.listen(3000,()=> console.log('El servidor esta levantado!!\nEn el puerto: 3000.\nhttp://localhost:3000'));