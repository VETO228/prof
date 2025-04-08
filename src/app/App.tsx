// Главный компонент, который связывает отсальные компоненты с помощью роутера

import React, { useReducer } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import UserReducer from '../entities/users/model/UserReducer'
import UserContext from './Context/UserContext'

const App: React.FC = () => {
  const [user, dispatcherUser] = useReducer(UserReducer, [])

  return (
    <UserContext.Provider value={{ user, dispatcherUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App
