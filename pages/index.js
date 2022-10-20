import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Login from '@components/pages/login/Login'

const Home = () => {
  const router = useRouter()
  // useEffect(()=>{
  //   router.push('/practice');
  // },[])

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          background: '#FFF',
        }}
      >
        <Login />
      </div>
    </div>
  )
}

export default Home
