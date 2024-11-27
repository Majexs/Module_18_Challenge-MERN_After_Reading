const typeDefs = `
    type User {
        _id: ID
        username: string
        email: string
        bookCount: number
        savedBooks: [Book]!
    }

    type Book {
        bookID: string
        authors: string[]
        description: string
        title: string
        image: string
        link: string
    }

    type UserInput {
        username: String!
        email: String!
        password: String!
    }

    type BookInput {
        bookId: String!
        authors: String!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(input: UserInput!): Auth
        login(email: String!, password: String!): Auth
        addBook(input: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;