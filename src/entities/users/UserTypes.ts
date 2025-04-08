// Данные для пользователя


export interface User {
    id: number;
    bio: string;
    first_name: string;
    last_name: string;
  }
  
  export interface State {
    items: User[];
  }
  
  export type Action =
    | { type: "load"; payload: User[] }
    | { type: "create"; payload: User }
    | { type: "delete"; payload: { id:number } }
    | { type: "update"; payload: User };