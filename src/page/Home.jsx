import { Link, NavLink, useNavigate } from "react-router-dom"
import { logout } from "../config/AuthService"

function Home() {
  const navigate = useNavigate()

  return (
    <h1>Hello nbro</h1>
  )
}
export default Home
