import React from 'react';

const RidePopUp = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center w-[90%] absolute top-0 left-40" onClick={()=>{
            props.setRidePopupPanel(false);
        }}><img className="text-3xl" src="./logo/arrow-down.svg" alt="" /></h5>
         <h3 className="text-2xl font-semibold mb-5">New ride available</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3 '>
                    <img className='w-12 h-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
        <div className="flex gap-2 justify-between items-center flex-col">
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400">
                    <img src="./logo/location.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>108/92-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                </div>
                </div>
                <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400">
                <img src="./logo/location1.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>108/92-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                </div>
                </div>
                <div className="flex items-center gap-5 p-2 ">
                <img src="./logo/cash.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                </div>
                </div>
            </div>
          <div className='flex mt-5 w-full items-center justify-between'>
          <button onClick={()=>{
                props.setRidePopupPanel(false);
                

            }} className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
          <button onClick={()=>{
               props.setConfirmRidePopupPanel(true);
               props.confirmRide()

            }} className=' bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
           
          </div>
        </div>
    </div>
  );
}

export default RidePopUp;
