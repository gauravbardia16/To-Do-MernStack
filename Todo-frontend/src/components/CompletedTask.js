const CompletedTask = (props) => {
    console.log(props.data);
    return(
        <div>
            <div className="completedtasksdiv">
                <div className="completedtasks">
                    <p>{props.data.task}</p>&nbsp;
                </div>
            </div>
        </div>
    );
}

export default CompletedTask;