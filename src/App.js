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

function App() {
  const { login_check, role } = useUserStore();

  return (
    <Router>
      <div>
        {login_check === null ? (
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<New2 />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/create-user" element={<Signup />} />
            <Route path="/view" element={<View />} />
          </Routes>
        ) : login_check && role === "admin" ? (
          <Routes>
            <Route path="/" element={<New2 />} />
            <Route path="/edit-data" element={<EditData />} />
            <Route path="/view" element={<View />} />
            <Route path="/user-request" element={<UserRequestsTable />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : login_check && role === "user" ? (
          <Routes>
            <Route path="/" element={<New2 />} />
            <Route path="/view" element={<View />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
