import React from "react";
import { ReactComponent as CheckIcon } from "../../public/image/svg/check.svg";
import { ReactComponent as DeleteIcon } from "../../public/image/svg/delete.svg";

const iconType = {
   delete: (color) => <DeleteIcon className="Icon-svg" fill={ color } />,
   check: (color) => <CheckIcon className="Icon-svg" fill={ color } />,
};

function TodoIcon({ type, color, onClick }) {
   return (
      <span
         className={`Icon-container Icon-container-${type}`}
         onClick={onClick}
      >
         {iconType[type](color)}
      </span>
   );
}

export { TodoIcon };