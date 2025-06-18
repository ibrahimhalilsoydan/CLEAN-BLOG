import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/cleanblog-db');

console.log('MongoDB bağlantısı başarılı');

const PostSchema = new mongoose.Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
