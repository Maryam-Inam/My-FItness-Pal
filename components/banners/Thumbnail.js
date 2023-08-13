import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Thumbnail({ onClick, active }) {
  return (
    <div
      className={` ${
        active ? "text-white" : "text-gray-500"
      } overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      <FiberManualRecordIcon fontSize="small" />
    </div>
  );
}

export default Thumbnail;
