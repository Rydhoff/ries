import axios from "axios"
import { useEffect, useState } from "react"
import { isAuthenticated, login } from "../config/AuthService"
import { useNavigate } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated()) return navigate("/")
  }, [])
  
  function submitForm() {
    axios.post("https://sc-hyouka.com/api/login", { username, password }, ).then(res => {
      if(res.data.token) {
        login(res.data.token)
        navigate("/")
      } else { console.log("wrongg") }
      
    }).catch(err => console.log(err))
  }

    return (
      <main className="flex justify-center items-center h-screen text-slate-600">
          <div className="bg-white px-6 py-8 w-80 h-fit shadow-2xl rounded-lg">
            <h1 className="font-bold text-center text-2xl mb-4 text-cyan-950">Login</h1>
            <div className="flex flex-col space-y-3">
              <div>
                <label className="block mb-1 font-semibold">Username</label>
                <input placeholder="Ridho" className="mt-2 ring-1 ring-slate-400 rounded focus:outline-slate-800 px-2 py-1 w-full" type="text" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Password</label>
                <input placeholder="12345678" className="mt-2 ring-1 ring-slate-400 rounded focus:outline-slate-800 px-2 py-1 w-full" type="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                {/* <span className="block cursor-pointer underline text-slate-950 text-xs mb-5">Forgot Password</span> */}
                <button className="mt-6 rounded bg-cyan-950 text-white font-semibold py-2 w-full" type="submit" onClick={submitForm}>Login</button>
              </div>
            </div>
          </div>
      </main>
    )
  }
  
  export default Login
  
