import React, { useEffect } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import routesData from "./routesData";
import { useNavigate, useLocation } from "react-router-dom";
import { localStorageData } from "../localStorageData";
import LoginPage from "../components/SharedPages/LoginPage/LoginPage";
import Content from "../components/UI/Content/Content";
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage";

const Routes = ({ lang, setLang }) => {
    let navigate = useNavigate();
    let location = useLocation().pathname;
    let userLogged = localStorageData.getUserLogin();

    useEffect(() => {
        if ((userLogged) && (location === "/login" || location === "/")) {
            navigate("/homepage")
        }
        else if ((!userLogged) && (location !== "/login")) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Switch>
            <Route exact path="login" element={<LoginPage lang={lang} setLang={setLang} />} />
            {routesData.map((route, index) => (
                <Route path={route.path} element={<Content children={route.component} />} key={index} />
            ))}
            <Route path="*" element={<ErrorPage />} />
        </Switch>
    );
};

export default Routes;
