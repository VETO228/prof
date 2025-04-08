// Контекст

import { createContext } from "react";

interface UserContextType {
    user: any; // Замените `any` на конкретный тип пользователя, если он известен
    dispatcherUser: (user: any) => void; // Замените `any` на конкретный тип пользователя
  }

const UserContext = createContext<UserContextType| null>(null);

export default UserContext;