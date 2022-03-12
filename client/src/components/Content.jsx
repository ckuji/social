import React from "react"
import {Users} from "./Users"
import {Routes, Route, Navigate} from 'react-router-dom'
import {MyPage} from "./MyPage";
import {Dialogs} from "./Dialogs";
import {Dialog} from "./Dialog";

export const Content = () => {
    return (
        <div className="container-content">
            <Routes>
                <Route path="/my_page" element={<MyPage/>}/>

                <Route path="/users" element={<Users/>}/>

                <Route path="/dialogs" element={<Dialogs/>}/>

                <Route path="/" element={<Navigate to="/my_page"/>} exact/>

                <Route path="/dialog_to_user/:id" element={<Dialog />} />

            </Routes>
        </div>
    )
}