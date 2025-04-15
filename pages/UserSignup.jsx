import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);


  const submitHandler = async (e) =>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  }
  return (
    <div>
       <div className="p-7 h-screen flex flex-col justify-center">
      <div>
      <img className='w-16 mb-10' src="./logo/Ecoride.webp"></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
          <div className='flex gap-2 mb-5'>
          <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value);
            }}
          />
           <input
            required
            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create account
          </button>
        </form>
          <p className="text-center">
            Already have an account ?
            <Link to="/login" className="text-blue-600 mb-3">
              Login here
            </Link>
          </p>
      </div>
      <div>
        <p className="text-xs mt-5">By proceeding, you consent to get emails, including by automated means, from Ecoride and its affiliates to the email provided.</p>
      </div>
    </div>
    </div>
  );
}

export default UserSignup;
