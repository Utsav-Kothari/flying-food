import { useState } from 'react'


const Section=({data,isVisible,setIsVisible,setIsInVisible})=>{
    
    return(
        <div className="m-3">
            <h1 className='text-xl font-bold'>{data.title}</h1>
             { isVisible ?
            <button className='p-1 m-1 bg-orange-100 rounded-lg font-semibold' onClick={()=>{setIsInVisible()}}>Hide</button>
            :
            <button className='p-1 m-1 bg-orange-100 rounded-lg font-semibold'  onClick={()=>{setIsVisible()}}>Show</button>
             }
            {isVisible && <p>{data.description}</p>}
            
        </div>
    )

}

const Offers=()=>{
    const [visibleSection,setVisibleSection]=useState("")
    
    return(
        <div>
         <Section data={
            {
            title:"First Offer",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
        } 
        isVisible={visibleSection==="first"}
        setIsVisible={()=>{setVisibleSection("first")}}
        setIsInVisible={()=>{setVisibleSection("")}}
         />
         <Section data={{
            title:"Second Offer",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
         }}
         isVisible={visibleSection==="second"}
         setIsVisible={()=>{setVisibleSection("second")}}
         setIsInVisible={()=>{setVisibleSection("")}}
          />
         <Section data={{
            title:"Third Offer",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
         }}
         isVisible={visibleSection==="third"}
         setIsVisible={()=>{setVisibleSection("third")}}
         setIsInVisible={()=>{setVisibleSection("")}}
         />
        </div>
    )
}
export default Offers