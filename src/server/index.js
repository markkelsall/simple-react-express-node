import express from 'express';

const app = express();

app.use(express.static('dist'));
app.get('/api/getGists', (req, res) => res.send({ gists: [] }));
app.listen(8080, () => console.log('Listening on port 8080!'));
