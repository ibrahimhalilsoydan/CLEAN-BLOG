import express from 'express';
import ejs from "ejs"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set("view engine","ejs");

app.use(express.static('public'))

app.get('/', (req, res) => {
 res.render("index");
});

app.get('/about', (req, res) => {
 res.render("about");
});

app.get('/add_post', (req, res) => {
 res.render("add_post");
});

app.get('/post', (req, res) => {
 res.render("post");
});




const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
