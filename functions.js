//Lesson 10 - The This keyboard

// this refers to object that is executing the current function

// function in an object is a method -> this refers to the object
// regular function -> this refers to global(window, global(in Node))

//Example:
const video = {
  title: 'a',
  play() {
    console.log('Play', this)
  }
}
video.stop = function () {
  console.log('Stop', this)
};
//video.stop(); // will print the entire video object;

function playVideo() {
  console.log(this);
}

//playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('A')