import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { use, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride; // Retrieve ride data

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative flex flex-col justify-end">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
 
        <img className="w-16" src="./logo/Ecoride.webp" alt="" />
        <Link
          to="/captain-home"
          className=" h-9 w-9 bg-white flex items-center justify-center rounded-full "
        >
          <img src="./logo/logout.svg" alt="" />
        </Link>
      </div>
      
      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[10%] absolute top-0 left-40"
          onClick={() => {}}
        >
          <img className="text-3xl" src="./logo/arrow-down.svg" alt="" />
        </h5>
        <h4 className="text-xl font-semibold">
          {ride?.distance || "N/A"} KM away
        </h4>{" "}
        {/* Display ride distance */}
        <button className=" bg-green-500 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white"
      >
        <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
      </div>
      <div className="h-screen w-screen fixed top-0 z-[-1]">
      <LiveTracking />
      </div>
    </div>
  );
};

export default CaptainRiding;
