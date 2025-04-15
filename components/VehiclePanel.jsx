import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className="p-3 text-center w-[90%] absolute top-0 left-40" onClick={()=>{
          props.setVehiclePanel(false)
        }}><img className="text-3xl" src="./logo/arrow-down.svg" alt="" /></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
              }} className='flex border-2 border-gray-500 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className="w-1/2 ml-2">
                  <h4 className="font-medium text-base flex gap-0.5">Car <span><img src="./logo/user.svg" alt="" /></span>4</h4>
                  <h5 className="font-medium text-sm">2 mins away</h5>
                  <p className="font-normal text-xs ">Affordable, compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.selectVehicle('moto')
              }} className='flex border-2 border-gray-500 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className="w-1/2 ml-2">
                  <h4 className="font-medium text-base flex gap-0.5">Moto <span><img src="./logo/user.svg" alt="" /></span>1</h4>
                  <h5 className="font-medium text-sm">3 mins away</h5>
                  <p className="font-normal text-xs ">Affordable Motorcycle rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹{props.fare.moto}</h2>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
              }} className='flex border-2 border-gray-500 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between'>
                <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className="w-1/2 ml-2">
                  <h4 className="font-medium text-base flex gap-0.5">Auto <span><img src="./logo/user.svg" alt="" /></span>2</h4>
                  <h5 className="font-medium text-sm">3 mins away</h5>
                  <p className="font-normal text-xs ">Affordable Auto rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
              </div>
    </div>
  );
}

export default VehiclePanel;
