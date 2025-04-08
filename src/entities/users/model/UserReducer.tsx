import React from "react"
import { User, Action } from "../UserTypes"

const UserReducer: React.Reducer<User[], Action> = (state, action) => {
    switch (action.type) {
      case "load":
        return action.payload
      case "create":
        return [...state, action.payload]
      case "update":
        return state.map(el=>el.id === action.payload.id ? action.payload : el)
      case "delete":
        return state.filter(el => el.id !== action.payload.id)
      default:
        return state
    }
  }
  
  export default UserReducer