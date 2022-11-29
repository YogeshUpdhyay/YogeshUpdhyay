import {HiMail} from "react-icons/hi";
import { HiBars2, HiSparkles, HiCodeBracket } from "react-icons/hi2"

import './navbar.css';

const Logo = (props) => {
  return (
    <svg
      id="logo_svg__eBtIyRn7rY61"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 210 210"
    >
      <text
        dx={0}
        dy={0}
        fontFamily='"eBtIyRn7rY61:::Montserrat"'
        fontSize={32}
        fontWeight={800}
        transform="translate(73.71 161.43)"
        fill="#ffbdbd"
        strokeWidth={0}
      >
        <tspan y={0}>Y</tspan>
      </text>
      <circle
        transform="translate(108.799 154.705)"
        fill="#4c40f7"
        strokeWidth={0}
        r={16.481}
      />
      <text
        dx={0}
        dy={0}
        fontFamily='"eBtIyRn7rY61:::Montserrat"'
        fontSize={15}
        fontWeight={400}
        transform="translate(128.469 155.316)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={700}>
          YOGESH
        </tspan>
        <tspan y={0} fontFamily='"eBtIyRn7rY61:::Roboto"' />
      </text>
      <rect
        width={4.479}
        height={4.479}
        rx={0}
        ry={0}
        transform="translate(197.581 150)"
        fill="orange"
        strokeWidth={0}
      />
      <style>
        {
          "@font-face{font-family:'eBtIyRn7rY61:::Montserrat';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-e3h05v3wd-qS&skey=7bc19f711c0de8f&v=v25) format('truetype')}@font-face{font-family:'eBtIyRn7rY61:::Montserrat';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/l/font?kit=JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-e3h05v3wd-qS&skey=7bc19f711c0de8f&v=v25) format('truetype')}@font-face{font-family:'eBtIyRn7rY61:::Montserrat';font-style:normal;font-weight:800;src:url(https://fonts.gstatic.com/l/font?kit=JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr70w-e3h05v3wd-qS&skey=7bc19f711c0de8f&v=v25) format('truetype')}@font-face{font-family:'eBtIyRn7rY61:::Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me5X5II3J6Yo6hzA&skey=a0a0114a1dcab3ac&v=v30) format('truetype')}"
        }
      </style>
    </svg>
  );
};

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>

      <div className="navbar-group">
        <div className="navbar-item">
          <HiSparkles />
          About
        </div>
        <div className="navbar-item">
          <HiCodeBracket />
          Work
        </div>
        <a className="navbar-item">
          <HiMail />
          <p>Contact</p>
        </a>
      </div>

      <div className="navbar-menuicon">
        <HiBars2 size={64} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
