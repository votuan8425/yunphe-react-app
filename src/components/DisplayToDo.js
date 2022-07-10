const DisplayToDo =(props)=>{
    const deleteToDoFromChild = (id) => {
        props.DeleteToDoFromParent(id);
    }
    const listToDo = props.childData;
    return(
        <div>
            <div>------------To Do List: -------------</div>
            {listToDo.map((item, index)=>{
            return(
                <div id={item.id} key={item.id} onClick={()=> deleteToDoFromChild(item.id)}>
                    {item.name}
                </div>
            )
            })}
        </div>
    )
}

export default DisplayToDo;