import React from "react"
import Skills from "./Skills"

export default function Dashboard() {

     return (
    
<section className= "mt-6">

    <h2 className= "text-2x1 font-semibold mb-4">Dashboard</h2>

  <div className= "grid grid-cols-1 md:grid-cols-2 gap-4">
        
    <div className="p-4 bg-white rounded-xl shadow-md border
                 border-slate-200">

        <h3 className="text-lg font-medium">Quick Stats</h3>

        <div className="flex gap-6 mt-3">
          <div>
          <p className="text-slate-500">Projects:</p> 
          <p className="text-lg text-center font-semibold">3</p>
          </div>
          <div>
          <p className="text-slate-500">Contributions:</p>
          <p className="text-lg text-center font-semibold">2</p>
          </div>
        </div>
      </div> 


    <div className="p-4 bg-white rounded-xl shadow-md border
                     border-slate-200">
  
      <h3 className="text-lg font-medium mb-2">Skills</h3>
      <Skills items={["React", "C++", "Python", "SQL"]}/>
    </div>


        
    <div className="p-4 bg-white rounded-x1 border
                   border-slate-200 md:col-span-2">
        <h3 className="text-lg font-medium mb-2">About</h3>
        <p className="text-slate-600 leading-relaxed">
      I'm an aspiring developer with some experience in Javascript.<br />
      I enjoy building small projects and learning new UI techniques.
        </p>
    </div>
  </div>
</section>

  );
}





