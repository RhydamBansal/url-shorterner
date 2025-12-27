
import Login from "./modules/user/pages/Login";
import Register from "./modules/user/pages/Register"
import { Button } from "@radix-ui/themes";
import { AppRoutes } from "./shared/routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { UrlShort } from "./modules/urlshortener/pages/UrlShort";



function App() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => {
        navigate('/register');
      }} type="button" variant="classic" size="3" style={{ margin: 6 }}>Register</Button>
      <Button onClick={() => {
        navigate('/login');
      }} type="button" variant="surface" size="3" style={{ margin: 6 }}>Login</Button>

      <AppRoutes />
    </>
  )
}

export default App;