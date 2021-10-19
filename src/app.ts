import 'dotenv/config';
import express, { json } from 'express';

import { router } from './routes';

const app = express();
app.use(json());

app.use(router);

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

app.get('/signin/callback', (req, res) => {
  let { code } = req.query;
  res.json(code);
});

app.listen(3333, () => console.log('🚀 Server listen on port 3333'));