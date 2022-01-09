import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const SingleLanguage = ({ flag, text, svg, onClick }) => {
  return (
    <div
      className="sl-singleLanguage d-flex ai-center c-pointer"
      onClick={onClick}
    >
      <img src={flag} alt={flag} />
      <h2>{text}</h2>
      {svg && <IoIosArrowUp />}
    </div>
  );
};

export default SingleLanguage;
