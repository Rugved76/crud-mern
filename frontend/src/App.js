import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser"; 
import './app.css'

// dotenv.config();
// export const url = 'http://localhost:5000'
export const url = 'https://crudbknd.onrender.com'
// export const url = process.env.SERVER_URL

function App() {
  return (    
    <BrowserRouter> 
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
