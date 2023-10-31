

const Loader = () => {
    const load=<>
     <div className="border border-blue-300 shadow rounded-md p-4 w-52 h-52 mt-16 ml-3">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    const num=[1,2,3,4,5,6,7,8,9,90];

    return (
        <div className='flex flex-wrap'>
            {/* <div className="shimmer-loader">
                <div className="shimmer"> <h1>Loading..</h1>
               </div>
            </div> */}
           {num.map((element)=>{
            return(<div key={element} className='m-2 p-2'>{load}</div>)
           })}
        </div>
    )
}
export default Loader