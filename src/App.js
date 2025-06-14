
 import {useState, useEffect} from 'react';

//  const WEATHERAPI = ();

const api = (`API NUMBER`) //takes api

 function WEATHERAPP () {

  const [zipcode, setZipcode] = useState(''); // text
  const [name, setName] = useState('');
  const [temp, setTemp] = useState(''); // text

  const [data, setData] = useState([]); // array - we are doing 3 sets of data 


// https://openweathermap.org/current
// https://openweathermap.org/current#zip
// https://openweathermap.org/api/forecast30#fields


  const submitForm = async () => {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${api}&units=imperial`);
    const resData = await res.json(); 
    
    // this is storing the values to render for later 
    // we will just showcase the zipcode the user inputted 
    // if it is wrong, it won't work anyway . 
    setData({
      zipcode: zipcode, // this is just what we are setting
      // as user input
      city: resData.name, // .name comes from api
      temp: resData.main.temp // main.temp comes from api
    
    });


    // if zipcode is invalid, that means it wouldn't be able
    // to find the zipcode that is inputed within api
    // and then it wont be able to find city name or temp so it errors
  };
  
    return(

      <div >

        {/* INPUT FIELD */}
        <input 
        type= 'text'
        value= {zipcode}
        onChange= {e => setZipcode(e.target.value)}

        />


          {/* SUBMIT BUTTON FIELD */}
          <button onClick={submitForm}>SUBMIT</button>

          <div> {/* opening */}

         {/* PLACE DATA */}
          

                 {/* lol, this is just a label for the output */}
        <label htmlFor="zipcode:"> zipcode: </label>  
                 {/* data is coming from line 14 and 30 */}
                          {/* everything after data. comes from setData */}
          <h5>{data.zipcode} </h5>

            <label htmlFor="city::"> city: </label>
         <h5>{data.city} </h5>
           <label htmlFor="temperature(fahrenheit):"> temperature(fahrenheit): </label>
         <h5>{data.temp}</h5>  


           </div> {/* closing */}
         </div>
    );
  
 }

 export default WEATHERAPP; 


