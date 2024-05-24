// what to Return a value from for each?? then use filter()
const arr2 = [10, 20, 300, 40, 50, 600];
const newarr2 = arr2.filter((num) => num > 100);
console.log(newarr2); // [ 300, 600 ]
// if num > 100 condition in {} ie scope then explicitly return values
console.log(
  arr2.filter((num) => {
    return num > 100;
  })
); // [ 300, 600 ]

//

//

//

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// books that are published after 2000
let book1 = books.filter((book) => book.publish > 2000);
console.log(book1);
book1 = books.filter((book) => {
  return book.publish > 2000;
});
