import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

  const navigate = useNavigate();

   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
  
  
    const submitHandler = async (e) =>{
      e.preventDefault();
     const captainData = {
        fullname:{
          firstname:firstName,
          lastname:lastName
        },
        email:email,
        password:password,
        vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-home');
      }

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setVehicleColor("");
      setVehiclePlate(""); 
      setVehicleCapacity("");
      setVehicleType("");
    }
  return (
    <div>
       <div className="p-7 h-screen flex flex-col justify-center">
      <div>
     
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
          <div className='flex gap-2 mb-5'>
          <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value);
            }}
          />
           <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-full  text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value);
            }}
          />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abc@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className='flex gap-2 mb-5'>
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className='flex gap-2 mb-5'>
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>


          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
          <p className="text-center">
            {" "}
            Already have an account ?{" "}
            <Link to="/captain-login" className="text-blue-600 mb-3">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs mt-5">By proceeding, you consent to get emails, including by automated means, from Ecoride and its affiliates to the email provided.</p>
      </div>
    </div>
    </div>
  );
}

export default CaptainSignup;
