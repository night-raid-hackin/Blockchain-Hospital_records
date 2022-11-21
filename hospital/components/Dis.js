import React from 'react'

function Dis({pass, setpass, activate}) {

  return (
    <div className="flex items-center w-full justify-center min-h-screen py-2 bg-gradient-to-r from-fuchsia-500 to-[#FF2E63]">

      <div className="bg-[#393E46] items-center justify-center rounded-2xl shadow-2xl h-4/5 w-1/5 max-w-4xl">
            <div className="items-center justify-center">
            <input value ={pass} onChange={e =>{setpass(e.target.value)}} type="text" id="default-input" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </div>
            <div className="items-center justify-center">
            <button onClick ={activate} className="bg-cyan-500  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  GET INFO
            </button>
            </div>              
    </div>
    </div>
  )
}

export default Dis
