import React from "react";
import footerlogo from "../../assets/images/footerlogo.png";
import { BiEnvelope, BiWorld } from "react-icons/bi";
import { MdCall } from "react-icons/md";
const Column1 = () => {
  return (
    <div>
      <img src={footerlogo} alt="" />
      <p className="text-sm my-4 text-textBase">
        203, Envato Labs, Behind Alis Steet, Melbourne, Australia.
      </p>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center text-sm gap-2 text-textBase">
          <MdCall className="text-primary" />
          123-456-789
        </li>
        <li className="flex items-center text-sm gap-2 text-textBase">
          <BiEnvelope className="text-primary" />
          contact@yourdomain.com
        </li>
        <li className="flex items-center text-sm gap-2 text-textBase">
          <BiWorld className="text-primary" />
          www.yourdomain.com
        </li>
      </ul>
    </div>
  );
};

export default Column1;
