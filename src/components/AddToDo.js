
const AddToDo = (props) =>{
    // const handleClickbtn = () => {
    //     props.handleClickbtn();
    // }
    // const setToDo = props.setToDo;
    // const toDo = props.toDo;
    const { toDo, setToDo, handleClickbtn} = props;
    return(
        <div>
                 <label >Todo's Name: </label>
                 <input value={toDo} type="text"onChange={ (event) => setToDo(event.target.value) }/>
                 <button type='submit' onClick={() => handleClickbtn()}>Submit</button>
                 <br/><br/>
        </div>
    )
}


export default AddToDo;