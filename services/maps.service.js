const axios = require("axios");
const captainModel = require('../models/captain.model')
module.exports.getAddressCoordinate = async (address) => {

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || destination){
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){

            if(response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS'){
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        }else{
            throw new Error('Unable to fetch distance and time');
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (address) => {
  if (!address) {
    throw new Error("Query is required");
  }
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    address
  )}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.results.length > 0) return response.data.results[0];
    else if (response.data.status == "ZERO_RESULTS")
      return { Error: "No result found" };
    else throw new Error("Unable to fetch suggestions ");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) =>{
    const captains = await captainModel.find({
      location:{
        $geoWithin:{
          $centerSphere:[[ltd, lng], radius / 6371 ]
        }
      }
    })
    return captains;
}