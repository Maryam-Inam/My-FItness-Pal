import React from "react";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Icon from "@mdi/react";
import { mdiCircleSmall } from "@mdi/js";

function Thumbnail({ onClick, active }) {
  return (
    <div
      className={` ${
        active ? "text-white" : "text-gray-500"
      } overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      {/* <FiberManualRecordIcon /> */}
      {/* <Icon
        path={mdiCircleSmall}
        size={2}
        style={{
          "& > svg": {
            padding: "4px", // Adjust the inner padding as needed
          },
        }}
      /> */}
    </div>
  );
}

export default Thumbnail;
