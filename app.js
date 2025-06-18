import Post from './models/Post.js';
import express from 'express';
import ejs from 'ejs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req, res) => {
  const posts =await Post.find({})
  res.render('index',{
    posts:posts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/posts', async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    detail: req.body.detail,
  });

  await newPost.save(); // 🔴 Bunu yazmazsan MongoDB'ye hiçbir şey gitmez
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
