import React, { useState } from 'react';
import _ from 'lodash';
import AddToDo from './AddToDo';
import DisplayToDo from './DisplayToDo';

const Home = () => {
    const [toDo, setToDo] = useState("");
    const [listToDo, setListToDo] = useState([
        {id: 'todo1', name: "Watch"},
        {id: 'todo2', name: "Play"},
        {id: 'todo3', name: "Learn"},
        {id: 'todo4', name: "My"},
    ])
    const randomInteger =(min, max)=> {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const handleClickbtn = () =>{
        if (!toDo){
            alert("Empty");
            return;
        }
        let toDoID =randomInteger(5, 6);
        let toDoItem = {
            id: `todo${toDoID}`, name: toDo
        }
        //lodash
        let currentToDoList = _.clone(listToDo);
        currentToDoList.push(toDoItem);
        setListToDo(currentToDoList);
        //spread operator
        // setListToDo([...listToDo, toDoItem])
        setToDo('');
    }
    const handleDeleteToDo = (id)=>{
        let currentToDoList = _.clone(listToDo);
        currentToDoList = currentToDoList.filter(item => item.id !== id);
        setListToDo(currentToDoList);

    }
    return(
        <div>
                <AddToDo
                toDo ={toDo}
                setToDo= {setToDo} 
                handleClickbtn = {handleClickbtn}
                />

                 <DisplayToDo
                    childData ={listToDo} // x <- y
                    DeleteToDoFromParent = {handleDeleteToDo}
                 />
        </div>
    );
}
// const Home = () => {
//     const [name , setName ] = useState("");
//     return(
//         <div>
//                  <label >Name: </label>
//                  <input value={name} type="text"onChange={ (event) => setName(event.target.value) }/>
//                  <br/><br/>
//                  Hello Server, name = {name}
//         </div>
//     );
// }

// class Home extends React.Component {
//     //Khai báo state
//     state = {
//         name :"",
//     }
//     //Gán giá trị cho state
//     render(){
//         return(
//             <div>
//                 <label >Name: </label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value})}/>
//                 <br/><br/>
//                 Hello Server, name = {this.state.name}
//             </div>
//         )
//     }
// }


export default Home;