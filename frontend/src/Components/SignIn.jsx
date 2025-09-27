import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { api } from '../api'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

 function submit() {
      
      navigate('/')
    
  }

  return (
    <div style={{ maxWidth: 420, margin: '60px auto', fontFamily: 'system-ui' }}>
      <h2>Sign In</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" onClick={submit}>Sign In</button>
      </form>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <p>New user? <Link to="/signup">Sign Up</Link></p>
    </div>
  )
}
