import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
 

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Create/>
    </div>
  );
}

export default App;
