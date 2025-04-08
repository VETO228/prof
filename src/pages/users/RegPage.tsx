// Страница Добавление пользователя

import React from "react"
import UserForm from "../../entities/users/ui/UserForm"
import UserReducer from "../../entities/users/model/UserReducer";
import { useReducer } from "react";
import { User } from "../../entities/users/UserTypes";

const RegPage: React.FC = () => {
    const [user, dispatcherUser] = useReducer(UserReducer,[]);
    const currentUser: User | null = user.length > 0 ? user[0] : null;

    return (
        <div>
            <h2>Users</h2>
            <UserForm dispatcherUser={dispatcherUser} user={currentUser}/>
        </div>
    )
}

export default RegPage