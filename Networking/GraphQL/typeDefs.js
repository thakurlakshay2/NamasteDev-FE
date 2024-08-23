// '!' makes it mandatory filed

//all the methods to be called are in  type Query{}

// in Query [authors] is asking for an array of authors  . i.e multiple
export const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!
        books: [Book]
    }

    type Book {
        id:ID!
        title: String!
        publishedYear: Int
        author:Author

    }

    type Query {
        authors: [Author] 
        books: [Book]
    }
    
    type Mutation{
        addBook(title: String!, publishedYear: Int, authorId: ID! ): Book!
    }
   
`;

//just adding books to authod type and author on book , just enables us to get all books for a particular author , it is just that simple

// ..type Mutation  , function : return .
