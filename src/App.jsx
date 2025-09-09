import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Home from './Components/Home'

const isAuthed = () => !!localStorage.getItem('token')

function PrivateRoute({ children }) {
  return isAuthed() ? children : <Navigate to="/signin" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
