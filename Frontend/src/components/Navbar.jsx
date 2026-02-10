import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="bg-orange-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Food Recipes</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-orange-200">Home</a></li>
            <li><a href="/recipes" className="hover:text-orange-200">My Recipes</a></li>
            <li><a href="/favourites" className="hover:text-orange-200">Favourites</a></li>
            <li><a href="/about" className="hover:text-orange-200">About</a></li>
            <li><a href="/login" className="hover:text-orange-200">Login</a></li>
          </ul>
        </nav>
      </div>
    </nav>
    </>
  )
}

export default Navbar