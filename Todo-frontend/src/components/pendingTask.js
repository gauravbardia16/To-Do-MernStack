const PendingTask = (props) => {
    console.log(props);
    return(
        <div>
            <div className="pendingtasksdiv">   
                <div className="pendingtask">
                    <p>{props.data.task}</p>&nbsp;
                    <button type="button" onClick={()=>props.changeStatus(props.data._id)}>Update Task as Completed</button>&nbsp;
                    <button type="button" onClick={()=>props.delete(props.data._id)}>Delete Task</button>
                </div>
            </div>
        </div>
    );
}

export default PendingTask;