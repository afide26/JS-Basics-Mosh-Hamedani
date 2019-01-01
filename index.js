//Exercise Blog Post Object - Constructoru

//title
//body
//author
//views
//comments
//author
//body
//isLive

// let blogPost = {
//   title: 'First Blog',
//   body: 'This is the first message in the blog',
//   author: 'John Doe',
//   views: 20,
//   comments: [{
//     author: 'Alan Fidelino',
//     body: 'Hello'
//   }, {
//     author: 'a',
//     body: 'b'
//   }],
//   isLive: true
// }

// console.log(blogPost);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author
  this.views = 0;
  this.comments = [];
  this.isLive = false
}

let newPost = new Post('New Blog', 'Test', 'Alan');

console.log(newPost)