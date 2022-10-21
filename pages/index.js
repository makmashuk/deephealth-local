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
        background: '#FFF',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Login />
    </div>
  )
}

export default Home
