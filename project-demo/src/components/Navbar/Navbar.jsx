import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-16 py-8">
        <div className="text-white/70 text-2xl">
        Folioblox
        </div>
        <div className="flex list-none gap-6 text-white items-center text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <button className="bg-white text-black px-6 py-2 rounded-3xl text-sm font-bold">
            Get In Touch
            </button>
        </div>
    </nav>
  )
}

export default Navbar