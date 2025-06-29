import express from 'express';
import methodOverride from 'method-override';
import * as postControllers from './controllers/postControllers.js';
import * as pageControllers from './controllers/pageControllers.js';

const app = express();
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', postControllers.getAllPosts);
app.get('/posts/:id', postControllers.getPost);
app.post('/posts', postControllers.creatPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);

app.get('/posts/edit/:id', pageControllers.getEditPostPage);
app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPostPage);
app.get('/post', pageControllers.getPostPage);

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
