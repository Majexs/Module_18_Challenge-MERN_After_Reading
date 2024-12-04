import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
        _id
        bookCount
        email
        books {
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