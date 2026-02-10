import express from 'express';
import { dbConnections } from './database/dbConnections.js';
import taskRouter from './src/modules/tasks/tasks.routes.js';
import userRouter from './src/modules/user/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.use(taskRouter);
app.use(userRouter);
dbConnections();
app.get('/', (req, res) => res.send('Hello tasks!'));
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=index.js.map