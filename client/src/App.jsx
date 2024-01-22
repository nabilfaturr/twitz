import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Root from "./components/Root";
import Daftar from "./components/Daftar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<Daftar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Root from "./pages/Root.jsx";
// import Daftar from "./pages/Daftar.jsx";
// import Login from "./pages/Login.jsx";
// import UserHome from "./pages/user/Home.jsx";
// import AdminHome from "./pages/admin/Home.jsx";
// import NotFound from "./components/NotFound.jsx";
// import { useSelector } from "react-redux";
// import CreateTwit from "./pages/user/CreateTwit.jsx";
// import UserTwits from "./pages/user/UserTwits.jsx";
// import UpdateTwit from "./pages/user/UpdateTwit.jsx";

// const App = () => {
//   const { role } = useSelector((state) => state.user);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Root />}></Route>
//         <Route path="/sign-up" element={<Daftar />}></Route>
//         <Route path="/sign-in" element={<Login />}></Route>

//         <Route
//           path="/home"
//           element={
//             role === "admin" ? (
//               <AdminHome />
//             ) : role === "user" ? (
//               <UserHome />
//             ) : (
//               <NotFound />
//             )
//           }
//         ></Route>

//         <Route
//           element={role === "user" ? <CreateTwit /> : <NotFound />}
//           path="/home/create"
//         ></Route>
//         <Route
//           element={role === "user" ? <UserTwits /> : <NotFound />}
//           path={`/home/:user`}
//         ></Route>
//         <Route
//           element={role === "user" ? <UpdateTwit /> : <NotFound />}
//           path={`/home/:user/:tweetId`}
//         ></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
