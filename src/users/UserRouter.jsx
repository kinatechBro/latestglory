import { Route, Routes } from "react-router-dom";
import Auth from "../Auth/Auth";

function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default UserRouter;
