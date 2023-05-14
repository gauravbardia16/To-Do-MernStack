const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div>
            <h2 style={{ color: "#784caf", fontSize: "28px", textAlign: "center" }}> Welcome To Task Managing Site  </h2>
            <h2 style={{ textAlign: "left" }}>Add Task</h2>
            <div className="form-control">
                <label htmlFor="task_desc">  </label>
                <input type="text" name="task_desc" id="task_desc" />
            </div>
            <div className="form-control">
                <button onClick={doAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTask;