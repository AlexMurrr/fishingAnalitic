import express from "express";
import cors from "cors";
import router from './routes/routes.js';

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

app.use(express.json());

app.use(cors());

app.use(router);

app.get('/eee', (req, res) => {
    res.send('EEEE');
})