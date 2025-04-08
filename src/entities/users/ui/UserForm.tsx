// Логика Создания и Обновления Пользователя

import React, { useState } from "react";
import UserApi from "../api/UserApi";
import { User } from "../UserTypes";

interface UserFormContext {
    user: User | null;
    dispatcherUser: (user: any) => void;
}

const UserForm: React.FC<UserFormContext> = ({dispatcherUser, user = null}) => {
    const [bio, setBio] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        if (user) {
          UserApi.update(user.id, {id: Date.now(), bio, first_name, last_name}).then((data) => {
            console.log(data);
            dispatcherUser({ type: "update", payload: data});
          })
        } else {
            UserApi.create({id: Date.now(), bio, first_name, last_name}).then((data) => {
            console.log(data);
            dispatcherUser({ type: "create", payload: data});
          })
        }
      }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="bio" value={bio} onChange={(event)=>setBio(event.target.value)} required/>
            <input type="text" placeholder="first_name" value={first_name} onChange={(event)=>setFirstName(event.target.value)} required/>
            <input type="text" placeholder="last_name" value={last_name} onChange={(event)=>setLastName(event.target.value)} required/>
            <button type="submit">{user ? 'Update User' : 'Add User'}</button>
        </form>
    )
}
export default UserForm;