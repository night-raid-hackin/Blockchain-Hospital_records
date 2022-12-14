import React from 'react'

function PatientOut({output}) {

    

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="bg-gradient-to-r from-[#4FD3C4] to-[#C1F8CF] rounded-2xl shadow-2xl flex w-full max-w-4xl">
                 <div className="p-5 w-full">
                      {/* Sign In  */}
                      <div className="text-left font-bold">
                      <span className="text-black">NIGHT</span><span className="text-gradientfrom-cyan-500 to-blue-500"> RAID</span>
                      </div>
<div className="items-stretch justify-center px-60 mx-10">
  <h2 className="text-3xl w-full font-bold text-[#222831] mb-8">
    details of the Patient
  </h2>
  <div className="flex flex-col items-center w-full">
  {/* Patient's Details */}
<div className="bg-gray-100 w-full  p-2 rounded-xl mb-2">
<h1 className="text-black">
  {output.patientName}
</h1>
</div>


<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
  {output.medicalProb}
</p>
</div>


<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{output.miscellaneous}
</p>
</div>



<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{output.sex}
</p>
</div>


<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{parseInt(output.phoneNo)}
</p>
</div>


<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{parseInt(output.weight)}
</p>
</div>


<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{parseInt(output.bill)}
</p>
</div>



<div className="bg-gray-100 w-full p-2 rounded-xl mb-2">
<p className="text-black">
{parseInt(output.patinetId)}
</p>
</div>
{/* <input value={input1} onChange={e =>setInput1(e.target.value)} className="bg-gray-100 rounded-md"type="email" name="email" placeholder="Address">
</input> */}

<button  className="border-2 border-[#222831] rounded-full hover:text-[#FF2E63] px-12 py-2 inline-block mt-10 font-semibold bg-[#222831] text-white">LOG OUT</button>

  </div>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default PatientOut
