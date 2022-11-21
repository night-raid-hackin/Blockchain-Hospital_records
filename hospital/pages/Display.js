import React from 'react'
import { InfoContractAddress } from '../config'
import InfoContractAbi from '../../proj1/artifacts/contracts/InfoContract.sol/InfoContract.json';
import { useState } from 'react';
import { ethers } from 'ethers';
import Dis from '../components/Dis';
import PatientOut from './PatientOut';

function Display() {
    const [output, setOutput] = useState([]);
    const [pass, setpass] = useState('');
    const [isActive , setIsActive] = useState(false);

   
    const getContent = async () =>{
        try{
          const {ethereum} = window;
          if(ethereum){
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const InfoContract = new ethers.Contract(
              InfoContractAddress,
              InfoContractAbi.abi,
              signer
            )
            let p = Number(pass.toString(16));
            let allContent = await InfoContract.showDetails(p);

            setOutput(allContent);

            console.log(output);

      
          }
          else{
            console.log("no object found");
          }
        }catch(error){
          console.log(error);
        }
      }
    

    const activate= e =>{
        e.preventDefault();
        setIsActive(true);
        // router.push(`/PatientOut?output=${output}`);
        getContent();
    }


  return (

    <div>
      {
        !isActive ? <Dis activate={activate} pass={pass} setpass={setpass}/> : <PatientOut output={output}/>
      }
    </div>

  )
}

export default Display