import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between p-2">
    <div className="flex items-center text-center gap-6 w-full mb-2">
      <h2 className="text-4xl font-bold mb-2">
        <span className="text-blue-500">T</span>
        <span className="text-red-500">a</span>
        <span className="text-green-500">l</span>
        <span className="text-yellow-500">l</span>
        <span className="text-purple-500">p</span>
        <span className="text-pink-500">y</span>
        <span className="text-orange-500">.</span>
      </h2>
    </div>
    <div className="flex gap-1">
    
    </div>
    </header>
  )
}

export default Navbar