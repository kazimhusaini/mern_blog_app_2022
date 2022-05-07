
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
 
    <BrowserRouter>
    <Topbar/>
        <Routes>
      <Route exact path="/" element={<Homepage />}>
      </Route>
      <Route path="/posts" element={<Homepage />}>

      </Route>
      <Route path="/register" element={user ? <Homepage /> : <Register />}>

      </Route>
      <Route path="/login" element={user ? <Homepage /> : <Login />}></Route>
      <Route path="/post/:id" element={<Single />}>

      </Route>
      <Route path="/write" element={user ? <Write /> : <Login />}></Route>
      <Route path="/settings" element={user ? <Settings /> : <Login />}>

      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;