import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Cart from "./core/Cart";
const Routez = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/' element={<PrivateRoutes/>}>
                        <Route exact path='/user/dashboard' element={<UserDashboard/>}/>
                    </Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default Routez;