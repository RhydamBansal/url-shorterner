import { Route, Routes } from "react-router-dom"
import { Home } from "../../modules/user/pages/Home";
import Login from "../../modules/user/pages/Login";
import Register from "../../modules/user/pages/Register";
import { DashBoard } from "../../modules/dashboard/DashBoard";
import { UrlShort } from "../../modules/urlshortener/pages/UrlShort";
import { AllUrls } from "../../modules/urlshortener/pages/AllUrls";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />}>
                <Route index element={<UrlShort />} />
                <Route path="shorten" element={<UrlShort />} />
                <Route path="links" element={<AllUrls />} />
            </Route>
        </Routes>
    )
};
