import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.js'
import SearchBooks from './pages/SearchBooks.js'
import SavedBooks from './pages/SavedBooks.js'
import LoginForm from './pages/LoginForm.js'
import SignupForm from './pages/SignupForm.js'
import ErrorPage from './pages/Error.js'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <SearchBooks/>,
            },
            {
                // Wrong path???

                path: '/me',
                element: <SavedBooks/>,
            },
            {
                // Wrong path???

                path: '/login',
                element: <LoginForm/>,
            },
            {
                // Wrong path???

                path: '/signup',
                element: <SignupForm/>,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router}/>);
}