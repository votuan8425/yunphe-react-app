import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search';
import './Weather.scss';
const Weather =()=>{
    const [title, setTitle] = useState("");

    useEffect(async()=> {
            let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: 'https://wwww.metaweather.com/api/location/1236594/'},
        });
            setTitle(response.data.title)
    }, []);
    return(
       <div className='weather-app-container'>
         <Search />
       </div>
    )
}


// class Weather extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state = {
//             title: ""
//         }
//     }

//     async componentDidMount() {

//         let response = await axios({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: 'https://wwww.metaweather.com/api/location/1236594/'},
//         });
//         this.setState({
//             title: response.data.title
//         })
//         console.log("check data: ", response.data);
//     }
//     render() {
//         return (
//             <div>
//                     Weather Component: title ={this.state.title}
//             </div>
//         )
//     }
// }

export default Weather;