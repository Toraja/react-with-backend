import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
