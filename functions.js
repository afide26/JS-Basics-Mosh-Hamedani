//Lesson 11 - Changing this

// this refers to object that is executing the current function

// function in an object is a method -> this refers to the object
// regular function -> this refers to global(window, global(in Node))

//Example First Approach:
const video = {
  title: 'A',
  tags: ['a', 'b', 'c'],
  showTags() {
    // let self = this;
    // this.tags.forEach(function (tag) {
    //   console.log(this.title, tag);
    // }.bind(this)) //now there is a new function created by bind that is scoped to this object.

    //Arrow functions inherit this
    this.tags.forEach((tag) => console.log(this.title, tag))
  }
}

video.showTags();

function playVideo(a, b) {
  console.log(this);
}

//Using call and apply. The argument passed; which is an object will be the this keyword

// playVideo.call({
//   name: 'ALAN'
// }, 1, 2);
// playVideo.apply({
//   name: 'Alan'
// }, [1, 2]); // in apply, the second argument must be an array
// playVideo.bind({
//   name: 'Carlos'
// })(); // Use () to call the new function from bind.
// playVideo();