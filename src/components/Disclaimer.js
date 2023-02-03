import React from "react";

const Disclaimer = ({ openModal, setOpenModal }) => {
  console.log(openModal);
  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="disclaimer text-center p-5 my-5">
          <h1>Disclaimer</h1>
          <p className="text-center">
            Lorem ipsum, in graphical and textual context, refers to filler text
            that is placed in a document or visual presentation. Lorem ipsum is
            derived from the Latin "dolorem ipsum" roughly translated as "pain
            itself."
          </p>

          <button
            className="btn btn-danger rounded-pill px-4 mt-5"
            onClick={() => setOpenModal(false)}
          >
            I Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
