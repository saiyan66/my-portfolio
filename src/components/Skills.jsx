export default function Skills({ items = ["React", "C++", "Python", "SQL"]}) {

    return (
        <div>
            <div className= "flex gap-2 flex-wrap mt-1">
           
                {items.map((s,i) => 
                (<span key = {i}  className="px-4 py-3 bg-slate-100 rounded-lg font-semibold text-sm">{s}</span>))}
            </div>
            
        </div>

    );
}



