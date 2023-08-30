import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "../pages/Shop";
import ShoppingCart from "../pages/ShoppingCart";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

function Router() {
    function createBrowserRouter() {
        [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'shop/:name',
                element: <Shop />,
            },
        ]
    }


    return <RouterProvider router={createBrowserRouter} />
}

export default Router;