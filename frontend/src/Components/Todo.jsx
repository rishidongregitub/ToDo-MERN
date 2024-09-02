function Todo(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <h2 className="text-center">Todo List</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-primary text-center">
                                <tr>
                                    <td>Task</td>
                                    <td>Status</td>
                                    <td>Deadline</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Not Done</td>
                                    <td>24 sep</td>
                                    <td>EDIT/DELETE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-5">
                    <h2>Add Task</h2>
                    
                </div>
            </div>
        </div>
    )
}
export default Todo; 