import React from "react";
import img1 from "../images/day.svg";
import img2 from "../images/cloudy-day-1.svg";
import img3 from "../images/cloudy-day-2.svg";
import img4 from "../images/cloudy-day-3.svg";

const Result = props => {


    const {err, date, temp_min, temp_max, temp, humidity, city, clouds} = props.weather

    let cloud_images = '';

    if (clouds <= 25){
        cloud_images = img1;
    } else if (clouds > 25) {
        cloud_images = img2;
    } else if (clouds > 50 ) {
        cloud_images = img3;
    } else cloud_images = img4;



    return(

        <div className="Results_container">

            <div className="Result">
                <h1>Temperature</h1>
                <p>{temp}<sup>&#8451;</sup></p>


            </div>

            <div className="Result">
                <h1>Temp. min.</h1>
                <p>{temp_min}<sup>&#8451;</sup></p>

            </div>


            <div className="Result">
                <h1>Temp. max.</h1>
                <p>{temp_max}<sup>&#8451;</sup></p>

            </div>


            <div className="Result">
                <h1>Humidity</h1>
                <p className="Humidity_p">{humidity}%</p>

            </div>

            <p className="City_name">{city}</p>
            <img className="Clouds_image" src={cloud_images} alt="cloudy picture" />


        </div>
    );
}

export default Result