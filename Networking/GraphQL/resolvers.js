const data = {
  authors: [
    { id: "1", name: "author 1", bookIds: ["101,102"] },
    { id: "2", name: "author 2", bookIds: ["103"] },
  ],
  books: [
    { id: "101", title: "Book 1", publishedYear: 2022, authorId: "1" },
    { id: "102", title: "Book 2", publishedYear: 2023, authorId: "1" },
    { id: "103", title: "Book 3", publishedYear: 2024, authorId: "2" },
  ],
};

//FYI schema has one to one mapping to resolvers
// export const resolvers = {
//   Query: {
//     authors: () => {
//       return [
//         {
//           id: 1,
//           name: "lakshay",
//         },
//       ];
//     },
//     books: () => {
//       return [
//         {
//           id: 1,
//           title: "graphQL book 1",
//           publishedYear: 2024,
//         },
//       ];
//     },
//   },
// };

export const resolvers = {
  //getting author for a book
  Book: {
    author: (parents, args, context, info) => {
      return data.authors.find(
        (authorDetail) => authorDetail.id === parents.authorId
      );
    },
  },

  Author: {
    books: (parents, args, context, info) => {
      return data.books.filter((book) => parents.bookIds.includes(book.id));
    },
  },

  //   simply getting books and authors

  Query: {
    authors: (parents, args, context, info) => {
      return data.authors;
    },
    books: (parents, args, context, info) => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (parents, args, context, info) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
