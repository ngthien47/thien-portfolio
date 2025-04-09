import logo from "../assets/TLogo.png";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.facebook.com/thien.tn02" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://github.com/ngthien47">
          <FaGithub />
        </a>
        <a href="https://www.tiktok.com/@thien.tn02" target="_blank">
          <FaTiktok />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
