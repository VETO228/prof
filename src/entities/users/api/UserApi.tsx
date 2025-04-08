import { User } from "../UserTypes";

class UserApi {
    static async getAll() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/`);
        const {data} = await response.json();  
        return data
      } catch (error) {
        return error;
      }
    };
  
    static async getOne(id: number) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}/`);
        const { data } = await response.json();  
        return data
      } catch (error) {
        return error;
      }
    };
  
    static async update(id: number, user: User) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}/`, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        });
        const data = await response.json();  
        return data
      } catch (error) {
        return error;
      }
    };
  
    static async create(user: User) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/reg/`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user)
        });
        const data = await response.json();  
        return data
      } catch (error) {
        return error;
      }
    };
  
    static async delete(id: number) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}/`, {
          method: "DELETE",
        });
        return response.status
      } catch (error) {
        return error;
      }
    };
  }
  
  export default UserApi