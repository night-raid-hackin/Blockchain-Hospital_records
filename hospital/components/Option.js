import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';

export default function Option() {
      
    const router = useRouter();
    const add =()=>{

        router.push("/Display");
    }

    const add1 = () =>{

        router.push("/Homes");
    }


 return (
    <>

    <div className="flex flex-col items-center justify-center w-full min-h-screen py-2 bg-gradient-to-r from-[#FF2E63] to-fuchsia-500">
    <div className="bg-[#FF2E63] h-[30vh] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
    <div className="w-full flex p-10 bg-[#393E46] rounded-2xl shadow-2xl h-full items-center justify-center">
    <div className=" cursor-pointer w-1/2 h-[10vh] mr-10 flex items-center justify-center rounded-2xl bg-[#FF2E63] hover:bg-[#FFC7C7] hover:text-black">

        <button onClick={()=>add()}>
            <h1 className="font-bold text-2xl">
            PATIENT
            </h1>
            </button> 

            </div>   
    
    <div className="w-1/2 h-[10vh] flex justify-center items-center bg-[#FFC7C7] rounded-2xl text-black drop-shadow-md hover:bg-[#FF2E63] hover:text-white">
        <button onClick={add1}>
            <h1 className="font-bold text-2xl">
    HOSPITAL
    </h1>
        </button>

        </div>
    
    
    </div>
    </div>
    </div>
    </>
  )
}
