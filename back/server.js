import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT

const server = express();

server.listen(PORT, () => {
    console.log(`Server in esecuzione alla porta ${PORT}`);
});
