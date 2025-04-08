// Страница Просмотра пользователей


import React from "react";
import UserList from "../../entities/users/ui/UserList";

const UsersPage: React.FC = () => {
    return (
        <div>
            <h2>Users</h2>
            <UserList/>
        </div>
    )
}

export default UsersPage