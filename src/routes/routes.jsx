import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App.jsx";
import MainPage from "../pages/MainPage.jsx";
import Menu from "../pages/Menu.jsx";
import ProductCoffee from "../pages/productCoffee.jsx";
import Page404 from "../components/404/Page404.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <Page404 />
        ),

        children: [
            {
                path: "/",
                element: (
                    <MainPage />
                )
            },
            {
                path: "منو",
                element: (
                    <Menu />
                ),
                children: [
                    {
                        path: "قهوه",
                        element: (
                            <ProductCoffee />
                        )
                    }
                ]
            }

        ]
    }


])