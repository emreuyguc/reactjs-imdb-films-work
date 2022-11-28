import { createBrowserRouter } from "react-router-dom";
import PageTop250 from './pages/Top250/Top250';
import PageMostPopular from "./pages/MostPopular/MostPopular";
import PageDetail from "./pages/Detail/Detail";

const AppRoutes = createBrowserRouter([
    {
        path: "/top250",
        element: <PageTop250 />
    },
    {
        path: "/most-popular",
        element: <PageMostPopular />
    },
    {
        path: "/detail/:id",
        element: <PageDetail />
    },
    {
        path: "/*",
        element: <PageTop250 />
    },
]);

export default AppRoutes;