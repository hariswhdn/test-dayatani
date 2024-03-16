import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../components/Icon";
import photo from "../assets/photo.png";

const Navbar = ({ setShowSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex w-full">
      {
        /** Jika URL memiliki slash lebih dari 1 (ex: /farmer/add), munculkan back */
        (location.pathname.match(/[/]/g) || []).length > 1 ? (
          <button
            type="button"
            className="flex items-center justify-center rounded-full bg-[#FEFDF8] w-10 h-10"
            onClick={() => navigate("/")}
          >
            <Icon icon="arrow_back" color="#22231F" />
          </button>
        ) : (
          <button
            type="button"
            className={[
              "items-center justify-center",
              "md:hidden",
              "max-md:flex",
            ].join(" ")}
            onClick={() => setShowSidebar((v) => !v)}
          >
            <Icon icon="menu" color="#22231F" />
          </button>
        )
      }
      <div className="ml-auto flex gap-x-2.5 items-center">
        <div className="flex w-10 h-10 items-center overflow-hidden justify-center rounded-full border-2 border-white">
          <img
            src={photo}
            alt="photo"
            className="h-full w-auto max-w-[unset]"
          />
        </div>
        <p className="font-semibold">John Doe</p>
      </div>
    </nav>
  );
};

export default Navbar;
