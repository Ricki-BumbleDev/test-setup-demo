import express from 'express';
import { nanoid } from 'nanoid';
import path from 'path';

const app = express();

let user: { _id: string; firstName: string; lastName: string };

app.post('/api/v1/users/register', express.json(), (req, res) => res.json((user = { _id: nanoid(), ...req.body })));

app.get('/api/v1/users/get/me', (_req, res) => res.json(user));

app.use(express.static(path.join(__dirname, 'static')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'static', 'index.html')));

export default app;
