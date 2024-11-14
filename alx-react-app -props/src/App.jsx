import React from 'react'
import UserContext from './components/UserContext'
import UserProfile from '../../alx-react-app-new/src/components/UserProfile'
function App() {

  const [userData] = useState({
    person:'John' ,
    age: 24
  })
  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>

  )
}

export default App
