// Логика Просмотра Пользователя

import React from 'react';
import { User } from "../UserTypes";
import UserApi from '../api/UserApi';

interface UserDetailProps {
  user: User | null;
  dispatcherUser: (user: any) => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, dispatcherUser }) => {
  if (!user) {
    return null;
  }
 
  const deleteHandler = () => {
    UserApi.delete(user.id).then(()=>{
      dispatcherUser({ type: "delete", payload: user })
    });
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
      <p>ID: {user.id}</p>
      <p>BIO: {user.bio}</p>
      <p>First_name: {user.first_name}</p>
      <p>Last_name: {user.last_name}</p>
      <button onClick={deleteHandler}>Удалить</button>
    </div>
  );
};

export default UserDetail;