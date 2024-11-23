import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext"
import { motion } from "motion/react"
import axios from "axios"
import { toast } from "react-toastify"


const Login = () => {

    const[state, setState] = useState('Login');
    const { setShowlogin, backendUrl, setToken, setUser } = useContext(AppContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitHandler = async(e) =>{
      e.preventDefault();

      try{
        if(state === 'Login'){
          const { data } = await axios.post(backendUrl + "/api/user/Login",{email,password})

          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token);
            setShowlogin(false)
            toast('Login Success')
          }

          else{
            toast.error(data.message)
          }
        }
        else{
          const { data } = await axios.post(backendUrl + "/api/user/register",{name,email,password})

          if(data.success){
            setToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token);
            setShowlogin(false)
            toast('SignIn Success')
          }

          else{
            toast.error(data.message)
          }
        }
      }
      catch(error){
        console.log(error)
      }
    }


    useEffect(() => {
        document.body.style.overflow = "hidden"

        return() => {
            document.body.style.overflow = "unset"
        }
    },[])

  return (
    <motion.div className="fixed top-0 right-0 bottom-0 left-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:0.3}}
    >
      <motion.form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{opacity:0.2, y:50}}
        transition={{duration:0.3}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">{state}</h1>
        <p className="text-sm text-center">welcome back! Please sign to continue</p>

        {state !== "Login" &&<div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img width={29} height={40} src={assets.profile_icon} alt="" />
            <input onChange={e => setName(e.target.value)} value={name} className="outline-none text-sm" type="text" placeholder="Full Name" required/>
        </div>}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.email_icon} alt="" />
            <input onChange={e => setEmail(e.target.value)} value={email} className="outline-none text-sm" type="email" placeholder="Email" required/>
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.lock_icon} alt="" />
            <input onChange={e => setPassword(e.target.value)} value={password} className="outline-none text-sm" type="password" placeholder="Password" required/>
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

        <button className="bg-blue-600 w-full text-white py-2 rounded-full">{state === 'Login' ? 'Login' : "create account"}</button>

        {state === 'Login' ? <p className="mt-5 text-center">Don`t have an account? <span onClick={()=>setState("Signup")} className="text-blue-600 cursor-pointer">Sign up</span></p>
        :
        <p className="mt-5 text-center">Already have an account? <span onClick={()=>setState("Login")} className="text-blue-600 cursor-pointer">Login</span></p>
        }
        <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" className="absolute top-5 right-5 cursor-pointer"/>
      </motion.form>
    </motion.div>
  )
}

export default Login