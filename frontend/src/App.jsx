import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Components/Todo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
const headStyle ={
  textAlign :'center'
}
  return (
    <>
      <h1 style={headStyle}>Todo List</h1>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Todo/>}  />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
