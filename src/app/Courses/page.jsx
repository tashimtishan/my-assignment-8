const Coursepage = async() => {
    const fetchdata= await fetch("http://localhost:3000/data.json")
    const datas=await fetchdata.json();
    console.log(datas)
    return (
        <div className="grid grid-cols-3 max-w-6xl mx-auto gap-3 mt-10 mb-10">
            {datas.map((data)=>{
               return(
                <div key={data.key} className="shadow-lg p-8 rounded-md">
                    <img src={data.image} className="w-full h-48 object-cover" alt="" />
                    <p className="font-bold text-2xl mt-5">{data.title}</p>
                    <p className="mt-4 text-gray-600 font-semibold">{data.description}</p>
                    <button className="btn w-full mt-10 btn-info">View Details</button>
                </div>
               ) 
            })}
        </div>
    );
};

export default Coursepage;