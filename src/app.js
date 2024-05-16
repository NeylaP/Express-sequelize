const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000;
console.log("aca");
app.get('/api/healthy', (req, res)=>{
    console.log("Hola");
    res.status(200).json({
        success: true,
        message: "My server is healthy"
    });
})

app.listen(PORT, () => {{
    console.log(`Serve listening on port: ${PORT}`);
}});