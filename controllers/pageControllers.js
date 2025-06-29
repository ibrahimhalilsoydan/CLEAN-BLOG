import Post from '../models/Post.js';

export async function getEditPostPage(req, res) {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
}

export async function getAboutPage(req, res) {
  res.render('about');
}

export async function getAddPostPage(req, res) {
  res.render('add_post');
}

export async function getPostPage(req, res) {
  res.render('post');
}
