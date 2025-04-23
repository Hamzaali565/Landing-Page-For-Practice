import New2 from "./components/New2";
import View from "./screens/View";
import EditData from "./screens/EditData";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import useUserStore from "./store/zustand";
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import UserRequestsTable from "./screens/UserRequests";
import Header from "./components/Header";

function App() {
  const { login_check, role } = useUserStore();

  return (
    <Router>
      <Header />
      <div className="md:pt-20">
        {login_check === null ? (
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<New2 />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/create-user" element={<Signup />} />
            <Route path="/product-list" element={<View />} />
          </Routes>
        ) : login_check && role === "admin" ? (
          <Routes>
            <Route path="/" element={<New2 />} />
            <Route path="/edit-data" element={<EditData />} />
            <Route path="/product-list" element={<View />} />
            <Route path="/user-request" element={<UserRequestsTable />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : login_check && role === "user" ? (
          <Routes>
            <Route path="/" element={<New2 />} />
            <Route path="/product-list" element={<View />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
