// --------Question 1----------

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollNo: 12,
};

// console.log(Object.keys(student));

// --------Question 2----------

// console.log(student);
// delete student.rollNo;
// console.log(student);

// --------Question 3----------

// let arr = Object.keys(student);
// console.log(arr.length);

// --------Question 4----------

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// library.forEach((item) => {
//   Object.values(item).forEach((value) => {
//     console.log(value);
//   });
// });

// --------Question 5----------

class Cylinder {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }

  volume() {
    return 3.14 * this.radius ** 2 * this.height;
  }
}

let c1 = new Cylinder(7, 7);
console.log(c1.volume());

// --------Question 6----------

var library2 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library2.sort((a, b) => b.libraryID - a.libraryID);
console.log(library2);
