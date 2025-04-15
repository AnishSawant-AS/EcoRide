import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)


  return (
    <div>
      <div className='flex mt-6 mb-8 items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
            <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center '>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'> Hours Online</p>
          </div>
          <div className='text-center'>
            <h5 className='text-lg font-medium'>30 KM</h5>
            <p className='text-sm text-gray-600'> Total Distance</p>
          </div>
          <div className='text-center'>
            <h5 className='text-lg font-medium'>20</h5>
            <p className='text-sm text-gray-600'> Total Jobs</p>
          </div>
        </div>
    </div>
  );
}

export default CaptainDetails;
