
import React from 'react'
import { Search, Globe, Menu, User } from 'lucide-react'
import Link from 'next/link'


const Header = () => {


  return (
    <header className="bg-white border-b">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="text-xl font-bold text-red-500 ">
          Turismo Inteligente
        </div>
        <div className="flex items-center space-x-4 text-[#595960]">
            <Link href="#" className="text-sm font-medium">Pon tu espacio en Turismo inteligente</Link>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Globe className="w-5 h-5 text-red-400" />
            </button>
            <button className="flex items-center p-2 space-x-2 border rounded-full hover:shadow-md">
              <Menu className="w-5 h-5" />
              <User className="w-8 h-8 text-gray-500" />
            </button>
          </div>
      </nav>
      
    </header>
    
  )
}

export default Header