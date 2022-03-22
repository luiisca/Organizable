import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}