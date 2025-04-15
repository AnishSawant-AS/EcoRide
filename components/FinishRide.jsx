import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FinishRide = (props) => {
    const navigate = useNavigate();

    async function endRide(){
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`,{
            
                rideId: props.ride._id
           
       
        },{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if(response.status === 200){

            navigate("/captain-home")
        }
    }
  return (
    <div>
      <h5 className="p-3 text-center w-[90%] absolute top-0 left-40" onClick={()=>{
            props.setFinishRidePanel(false);
        }}><img className="text-3xl" src="./logo/arrow-down.svg" alt="" /></h5>
         <h3 className="text-2xl font-semibold mb-5 mt-4">Finish this ride</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3 '>
                    <img className='w-12 h-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
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
           <div className='mt-15 w-full'>
           <button 
           onClick={endRide}
           className='flex justify-center w-full mt-5 bg-green-500 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>

           <p className='mt-10 text-sm'>Click on Finish Ride if you have completed the payment</p>
           </div>
        </div>
    </div>
  );
}

export default FinishRide;
