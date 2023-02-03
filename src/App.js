import React, { useState } from "react";
import "./App.css";
import Disclaimer from "./components/Disclaimer";
import UserList from "./components/UserList";

const App = () => {
  const [openModal, setOpenModal] = useState(true);

  if (openModal) {
    return <Disclaimer openModal={openModal} setOpenModal={setOpenModal} />;
  } else {
    return (
      <>
        <div className="container my-5">
          <UserList />
        </div>
      </>
    );
  }
};

export default App;
