import { Route, Routes } from "react-router-dom";
import { Login } from "@/page/login/login";
import "./App.css";
import { Layout } from "./conmon_components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
