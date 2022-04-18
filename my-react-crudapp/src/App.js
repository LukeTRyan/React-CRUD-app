import React from "react";
import { Link } from "react-router-dom";
//import { Route } from 'react-router-dom';
//import CreateUser from './CreateUser'
export default function Navigate(){
   return (
       <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
       <div class="flex items-center flex-shrink-0 text-white mr-6">
           <span class="font-semibold text-xl tracking-tight">REACT CRUD APP</span>
       </div>
       <Link to="/">
           <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0">
               HOME
           </button>
       </Link>
       </nav>
   )
}