import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <>
      <h1>Here Goes the Shop Page</h1>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
