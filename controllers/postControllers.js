import Post from '../models/Post.js';

export async function getAllPosts(req, res) {
  const posts = await Post.find({});
  res.render('index', {
    posts: posts,
  });
}

export async function getPost(req, res) {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
}

export async function creatPost(req, res) {
  const newPost = new Post({
    title: req.body.title,
    detail: req.body.detail,
  });
  await newPost.save(); // 🔴 Bunu yazmazsan MongoDB'ye hiçbir şey gitmez
  res.redirect('/');
}

export async function updatePost(req, res) {
  const post = await Post.findOne({ _id: req.params.id });
  (post.title = req.body.title), (post.detail = req.body.detail);
  await post.save();
  res.redirect(`/posts/${req.params.id}`);
}

export async function deletePost(req, res) {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
}
