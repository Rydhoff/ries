import { Link, useNavigate } from "react-router-dom"
import { logout } from "../config/AuthService"

function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-3xl sm:text-5xl font-semibold text-slate-800">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-7 flex items-center justify-center gap-x-6">
          <Link to="/" className="rounded-md bg-slate-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800">Go back</Link>
        </div>
      </div>
    </main>
  )
}
export default NotFound
