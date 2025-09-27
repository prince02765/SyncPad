import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [me, setMe] = useState(null)
  const [text, setText] = useState('')

  function logout() {
    navigate('/signin')
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'system-ui' }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16 }}>
        <div>
          <strong>Welcome{me ? `, ${me.name}` : ''}!</strong>
        </div>
        <button onClick={logout}>Log out</button>
      </header>

      <h3>Home</h3>
      <p>Enter your text below:</p>
      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type here..."
        style={{ width:'100%', minHeight: '300px', padding: 12, fontSize: 16 }}
      />
    </div>
  )
}
