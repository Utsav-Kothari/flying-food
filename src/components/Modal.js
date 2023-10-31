import ReactDOM  from "react-dom"

const Modal=({ onClose,children })=>{
    return(
        ReactDOM.createPortal(
            <>
            <div className="fixed z-10 w-full mt-14 bg-gray-300 h-full shadow-3xl ">
                <div className="flex justify-center">
                <button type="close" className=" absolute w-10 rounded text-white h-8 mt-20 ml-96 bg-gradient-to-l from-blue-500 to-violet-700 font-bold hover:bg-red-500"
                onClick={onClose}>X</button>
                </div>
                {children}
            </div>
            </>
            
            ,
            document.getElementById('modal-root')
        )
    )
}
export default Modal;