import express from 'express';
import cors from 'cors';

import config from './config/config.js';
import routes from './routes/routes.js';

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json());
app.use(routes);

app.listen(config.port, config.host, () => {
    console.log(`Server running: http://${config.host}:${config.port}`)
});