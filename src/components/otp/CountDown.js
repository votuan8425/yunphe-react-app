import React, { useEffect, useState } from "react";
const CountDown = (props) =>{
    const [count, setCount] = useState(1000);

    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true);
            return
        };
        
        const timer = setInterval(() => {
            setCount(count -1);
        }, 3000);
        return () =>{
            clearInterval(timer);
          }
        }, [count]);

    return(
        <div>
            {count}
        </div>
    )
}


// class CountDown extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 10
//         }
//     }

//     componentDidMount() {
//         this.timer = setInterval(() =>{
//             let currentCount = this.state.count;
//             this.setState({
//                 count: currentCount - 1
//             })
//         }, 1000)
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log("run update: ", "currentState= ", this.state, "PrevState= ", prevState)
//         if (this.state.count !== prevState.count && this.state.count === 0){
//             if (this.timer){
//                 clearInterval(this.timer);
//             }
//         }
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }



export default CountDown;