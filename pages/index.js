import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from '@components/pages/login/Login'


const Home = () => {

  const router = useRouter();
  useEffect(()=>{
    router.push('/manager/site-overview');
  },[])

  return (
    <div style={{ position: "relative", minHeight: "calc(100vh - var(--size-nav))" }}>
      <div className="container">
      <Login/>

      </div>
    </div>
  )
}

export default Home