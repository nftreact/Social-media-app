import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import LayotPage from "./Pages/LayotPage";
import Explore from "./Pages/Explore";
import Login from "./Pages/Login";
import Activity from "./Pages/Activity";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<LayotPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<h1>salam</h1>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/editprofile" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}
export default App;
