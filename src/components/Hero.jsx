import React from "react"
import heroImage from "../assets/123.webp";
    export default function Hero({name = 'Sayan', role = 'Full-Stack'}) {
        return (
            
        <section className = "my-5">
            <div className = "flex items-center gap-8 flex-wrap">

            <img src = {heroImage}
            alt = {name}
            className = "w-[180px] h-[180px] object-cover rounded-lg"/>

            <div className = "min-w-[220px]">
                <h1 className="text = 2x1 font- semibold m-0" >
                 Hi, My name is {name}
                </h1>
                <p className="text-slate-600 mt-2">
                 My role is {role} Development</p>
            
            <div className="mt-3 flex gap-4">
                <button className="px-4 py-2 rounded-lg
                                 bg-blue-400
                                 text-slate-900 font-semibold
                                 hover:bg-blue-500 transition">Download Resume </button>

            
                <button className ="px-4 py-2 rounded-lg border
                                 border-slate-300
                                 hover:bg-slate-100 transition">Contact</button>

                </div>
              </div>
            </div>  
        </section>

       );
    }
