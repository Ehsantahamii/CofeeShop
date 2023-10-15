// import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import App from "../App.jsx";
// // import MainPage from "../pages/MainPage.jsx";
// // import Menu from "../pages/Menu.jsx";
// // import ProductCoffee from "../pages/productCoffee.jsx";
// // import Page404 from "../components/404/Page404.jsx";

// const Page404 = lazy(() => import("../components/404/Page404.jsx")),
//     MainPage = lazy(() => import("../pages/MainPage.jsx")),
//     Menu = lazy(() => import("../pages/Menu.jsx")),
//     ProductCoffee = lazy(() =>
//         import("../pages/productCoffee.jsx")
//     );



// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: (
//             <Page404 />
//         ),

//         children: [
//             {
//                 path: "/",
//                 element: (
//                     <MainPage />
//                 )
//             },
//             {
//                 path: "menu",
//                 element: (
//                     <Menu />
//                 ),
//                 children: [
//                     {
//                         path: "coffee",
//                         element: (
//                             <ProductCoffee />
//                         )
//                     }
//                 ]
//             }

//         ]
//     }


// ])