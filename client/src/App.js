import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
