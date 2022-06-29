import React, {Component} from "react";
import './App.css';
import Form from "./Form"
import Result from "./Result";


const APIcode = '8dd6da1db59722aba9aea531b12b9e45'

class App extends Component {

    state = {
        value: "",
        date: '',
        city: '',
        temp_min: '',
        temp_max:'',
        temp:'',
        humidity:'',
        clouds:'',
        err: false

    }


    handleCitySubmit = (e) =>{
        e.preventDefault()
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIcode}&units=metric`

        fetch(API)
            .then(response => {
                if(response.ok){
                    return response
                } throw Error("No city found")
            })
            .then(response => response.json())
            .then(data => {
                const date_current = new Date().toLocaleString()
                this.setState({
                    err: false,
                    date: date_current,
                    city: data.name,
                    temp_min: data.main.temp_min,
                    temp_max:data.main.temp_max,
                    temp: data.main.temp,
                    humidity:data.main.humidity,
                    clouds:data.clouds.all
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    err: true
                })
            })
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }



    render(){
        return (
            <div className="App_container">
                <Form value={this.state.value}
                      change={this.handleInputChange}
                      submit={this.handleCitySubmit}

                />
                <Result weather={this.state}/>
            </div>
    )
  }
}

export default App;
