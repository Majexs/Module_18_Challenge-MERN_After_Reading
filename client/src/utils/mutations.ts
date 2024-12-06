import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
    mutation Mutation($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
        }
    }
`;

export const ADD_USER = gql `
    mutation Mutation($input: UserInput!) {
        addUser(input: $input) {
            token
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation Mutation($input: BookInput!) {
        saveBook(input: $input) {
            _id
            bookCount
            email
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
            username
        }
    }
`;