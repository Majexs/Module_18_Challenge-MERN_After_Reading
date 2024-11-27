import { User, Book } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';

interface AddUserArgs {
    input:{
        username: string;
        email: string;
        password: string;
    }
}

interface LoginUserArgs {
    email: string;
    password: string;
}

interface AddBookArgs {
    input:{
        bookId: string;
        authors: string;
        description: string;
        title: string;
        image: string;
        link: string;        
    }
}

interface RemoveBookArgs {
    bookId: string;
}

const resolvers = {
    Query: {
        me: async (_parent: any, _args: any, context: any) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('books');
            }
            throw new AuthenticationError('Could not authenticate user.');
        },
    },
    Mutation: {
        addUser: async (_parent: any, { input }: AddUserArgs) => {
            const user = await User.create({ ...input });

            const token = signToken(user.username, user.email, user._id);

            return { token, user };
        },

        loginUser: async (_parent: any, { email, password }: LoginUserArgs) => {
            const user = await User.findOne({ email});

            if (!user) {
                throw new AuthenticationError('Could not authenticate user.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Could not authenticate user.');
            }

            const token = signToken(user.username, user.email, user.id);

            return { token, user };
        },

        saveBook: async (_parent: any, { input }: AddBookArgs, context: any) => {
            if (context.user) {

                // Does this need to be reworked???

                const book = await Book.findOne({ ...input });

                await User.findOneAndUpdate(
                    { _id: context.user_id },
                    { $addToSet: { books: book._id }}
                );

                return book;
            }
            throw AuthenticationError;
            ('You need to be logged in!');
        },

        removeBook: async (_parent: any, { bookId }: RemoveBookArgs, context: any) => {
            if (context.user) {
                const book = await Book.findOneAndDelete({
                    _id: bookId,
                });

                if(!book) {
                    throw AuthenticationError;
                }

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { books: book._id }}
                );

                return book;
            }
            throw AuthenticationError;
        },
    },
};

export default resolvers;