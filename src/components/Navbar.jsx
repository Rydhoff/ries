import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../config/AuthService"

function Navbar({ children }) {
  const navigate = useNavigate()

  return (
    <div className="flex">
        <nav className="bg-white shadow-xl w-56 h-screen py-6 px-4 flex flex-col space-y-4 rounded-br-3xl rounded-tr-3xl">
            <div className="flex flex-col space-y-1">
                <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Dashboard</label>
                <NavLink to="/" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Device</NavLink>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Source</label>
                <NavLink to="/database" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Database</NavLink>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Message</label>
                <NavLink to="/autoreply" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Auto Reply</NavLink>
                <NavLink to="/scheduled" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Scheduled</NavLink>
                <NavLink to="/blast" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Blast</NavLink>
                <NavLink to="/send-manual" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Send Manual</NavLink>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="px-2 font-bold text-slate-300 text-xs mt-2 mb-1">Rest API</label>
                <NavLink to="/configuration" className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Configuration</NavLink>
                <p onClick={() => {
                    logout()
                    navigate("/login")
                }} className="font-semibold text-slate-500 aria-[current=page]:text-cyan-800 text-sm py-2 px-2 aria-[current=page]:bg-cyan-100 rounded">Logout</p>
            </div>
        </nav>
        <main className="px-14 py-12">
            {children}
        </main>
    </div>
  )
}
export default Navbar



