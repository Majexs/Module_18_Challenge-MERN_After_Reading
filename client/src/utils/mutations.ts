import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
    mutation Mutation($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                bookCount
                email
                savedBooks {
                    authors
                    bookID
                    description
                    image
                    link
                    title
                }
                username
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation Mutation($input: UserInput!) {
        addUser(input: $input) {
            token
            user {
                _id
                bookCount
                email
                savedBooks {
                    authors
                    bookID
                    description
                    image
                    link
                    title
                }
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation Mutation($input: BookInput!) {
        saveBook(input: $input) {
            _id
            bookCount
            email
            savedBooks {
                authors
                bookID
                description
                image
                link
                title
            }
            username
        }
    }
`;

export const REMOVE_BOOK = gql `
    mutation Mutation($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            bookCount
            email
            savedBooks {
                authors
                bookID
                description
                image
                link
                title
            }
            username
        }
    }
`;