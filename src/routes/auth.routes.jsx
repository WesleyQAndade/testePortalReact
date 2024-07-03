import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Feedback } from '../pages/Feedback';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={ SignIn } />
            <Route path="/register" element={ SignUp } />
            <Route path="/feedback" element={ Feedback } />
        </Routes>
    )
}