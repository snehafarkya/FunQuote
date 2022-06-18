import React from 'react'
import { Link } from "react-router-dom";
import logo1 from './logo1.png'
export default function Navbar() {
  return (
    <div>
        <header class="text-gray-900 body-font">
  <div class=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>  */}
      <img src={logo1} alt="" height={60} width={60} />
      <span class="ml-3 text-xl">FunQuote</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900"><Link to="/"> Home </Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="/doc"> About </Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="/quote">Quotes</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="/contact">Get in Touch with </Link></a>
    </nav>     
     
  </div>
</header>
    </div>
  )
}




  