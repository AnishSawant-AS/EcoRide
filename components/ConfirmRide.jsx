import React from 'react';

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center w-[90%] absolute top-0 left-40" onClick={()=>{
          props.setVehiclePanel(false)
        }}><img className="text-3xl" src="./logo/arrow-down.svg" alt="" /></h5>
         <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

        <div className="flex gap-2 justify-between items-center flex-col">
            <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400">
                    <img src="./logo/location.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>108/92-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                </div>
                </div>
                <div className="flex items-center gap-5 p-2 border-b-2 border-gray-400">
                <img src="./logo/location1.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>108/92-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                </div>
                </div>
                <div className="flex items-center gap-5 p-2 ">
                <img src="./logo/cash.svg" alt="" />
                <div>
                    <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                </div>
                </div>
            </div>
            <button onClick={()=>{
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
                props.createRide()
            }} className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  );
}

export default ConfirmRide;
