import { useEffect, useState } from "react";
import axios from 'axios';



function Todo() {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(result=>{
        setTodoList(result.data)
      }).catch((error)=> console.log(err))
    }, [])
    
  return (
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
          <form className="bg-light p-4">
            <div className="nb-3">
              <label>Task</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
              />
            </div>
            <div className="nb-3">
              <label>Status</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
              />
            </div>
            <div className="nb-3">
              <label>Deadline</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
              />
            </div>
            <div className="nb-3">
              <label>Action</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
              />
            </div>
            <button className="btn btn-success btn-sm mt-2">Add task</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Todo;
