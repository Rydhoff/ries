import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../config/AuthService"
import ries from "../assets/ries.png"
import { useEffect, useState } from "react"
import axios from "axios"

function Navbar({ children }) {
  const navigate = useNavigate()
//   const [status, setStatus] = useState(false)
//   useEffect(() => {
//     axios.get("https://sc-hyouka.com/api/").then(res => console.log(res.data.success))
//   })

  return (
    <div className="flex">
        <nav className="bg-white shadow-xl w-62 max-sm:hidden h-screen py-6 px-4 flex flex-col rounded-br-3xl rounded-tr-3xl justify-between">
            <div>
                <header className="border-b-2 h-fit rounded px-3 py-4 flex align-center">
                    <img className="h-16 p-1 w-auto mt-auto mb-auto mr-3" src={ries} alt="ries" />
                    <div className="py-2 mt-auto mb-auto">
                        <h1 className="text-sm text-slate-600 font-bold">RIES</h1>
                        <h1 className="text-xs text-slate-600 font-bold">by Ridho</h1>
                        
                    </div>
                </header>
                <div>
                    <div className="flex flex-col">
                        <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Dashboard</label>
                        <NavLink to="/" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Device</NavLink>
                    </div>
                    <div className="flex flex-col">
                        <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Source</label>
                        <NavLink to="/database" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Database</NavLink>
                    </div>
                    <div className="flex flex-col">
                        <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Message</label>
                        <NavLink to="/autoreply" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Auto Reply</NavLink>
                        <NavLink to="/scheduled" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Scheduled</NavLink>
                        <NavLink to="/blast" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Blast</NavLink>
                        <NavLink to="/send-manual" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Send Manual</NavLink>
                    </div>
                    <div className="flex flex-col">
                        <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Rest API</label>
                        <NavLink to="/configuration" className="font-semibold text-slate-500 aria-[current=page]:text-slate-600 text-sm py-2 px-2 aria-[current=page]:bg-slate-100 rounded">Configuration</NavLink>
                    </div>
                </div>
            </div>
                    <button onClick={() => {
                        logout()
                        navigate("/login")
                    }} className="font-semibold text-red-500 text-sm py-3 px-2 text-left align-middle shadow-sm rounded-lg"><svg className="inline w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="power"><rect fill="#EF4444"></rect><line x1="127.992" x2="127.992" y1="48.003" y2="124.003" fill="none" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><path fill="none" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" d="M176.00189,54.23268a88,88,0,1,1-96.00346-.00021"></path></svg>
                        Logout</button>
        </nav>
        <main className="px-14 py-12">
            {children}
        </main>
    </div>
  )
}
export default Navbar



