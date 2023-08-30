import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import App from "../App";

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/shop',
            element: <Shop />,
        },
    ]);

    return <RouterProvider router={router} />
}

export default Router;