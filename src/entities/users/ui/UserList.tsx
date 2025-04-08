// Логика Просмотра Пользователей

import React from "react"
import { useReducer, useEffect } from "react";
import UserReducer from "../model/UserReducer";
import UserDetail from "./UserDetail";
import UserForm from "./UserForm";
import UserApi from "../api/UserApi";
import { User } from "../UserTypes";


const UserList: React.FC = () => {
    const [users, dispatcherUsers] = useReducer(UserReducer,[]);
    const currentUser: User | null = users.length > 0 ? users[0] : null; 

    useEffect(()=>{
        UserApi.getAll().then(data=>{
            dispatcherUsers({ type: "load", payload: data})
        });
      }, [])

    return (
        <div>
            <h2>Users</h2>
            <UserForm dispatcherUser={dispatcherUsers} user={currentUser}/>
            {users.map((user) => (
                <UserDetail key={user.id} user={user} dispatcherUser={dispatcherUsers}/>
            ))}
        </div>

    )
}

export default UserList