import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="w-[100%] h-[40px] flex flex-col text-center items-center justify-center">
        <ul className="p-0 m-0 flex flex-row text-center items-center justify-center gap-[15px]">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/reactquery">ReactQuery</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
