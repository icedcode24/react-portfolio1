import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/footer";





function App() {
 

  let location = useLocation();
  console.log(location.pathname);

 
  let imageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };
  if (location.pathname === "/") {
    imageStyle.backgroundImage = `url(${homeImage})`;
  } else {
    imageStyle.backgroundImage = `url(${bgImage})`;
  }
  return (
    <div className="App" style={imageStyle}>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;