import { useLocation, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const arr_sidebar = [
    {
      id: 1,
      text: "Farmers",
      icon: "person_outlined",
      icon_alt: "person",
      icon_fill: "none",
      path: ["/", "/farmer"],
    },
    {
      id: 2,
      text: "Crop Detection",
      icon: "coronavirus_outlined",
      icon_alt: "coronavirus",
      path: "/crop-detection",
      icon_viewbox: "0 -960 960 960",
      icon_alt_viewbox: "0 0 24 24",
    },
    {
      id: 3,
      text: "Crop Images",
      icon: "psychiatry_outlined",
      icon_alt: "psychiatry",
      path: "/crop-images",
      icon_viewbox: "0 -960 960 960",
      icon_alt_viewbox: "0 -960 960 960",
    },
    {
      id: 4,
      text: "Chatbot",
      icon: "robot_outlined",
      icon_alt: "robot",
      path: "/chatbot",
      icon_viewbox: "0 0 24 24",
      icon_alt_viewbox: "0 0 24 24",
    },
    {
      id: 5,
      text: "Assets",
      icon: "radio_outlined",
      icon_alt: "radio",
      path: "/assets",
      icon_viewbox: "0 0 24 24",
      icon_alt_viewbox: "0 0 24 24",
    },
  ];

  const isSelected = (o) =>
    (o.id === 1 && location.pathname === "/") ||
    (Array.isArray(o.path) &&
      o.path.some((o) => o !== "/" && location.pathname.includes(o))) ||
    (o.id !== 1 && location.pathname.includes(o.path));

  return (
    <aside className="flex w-[200px] flex-col py-[48px] px-[3px] gap-y-6 border-r border-[#C2CFD6]">
      <div
        onClick={() => navigate("/")}
        className="w-auto h-9 flex cursor-pointer mx-auto items-center justify-center overflow-hidden"
      >
        <img src={logo} className="w-auto max-w-[unset] h-full" alt="logo" />
      </div>
      <ul
        className={[
          "flex flex-col text-[#4D4F47] text-[12px] gap-y-6",
          "[&>li]:flex [&>li]:relative [&>li]:items-center [&>li]:gap-x-2 [&>li]:pl-[15px]",
          "[&>li]:cursor-pointer",
        ].join(" ")}
      >
        {arr_sidebar.map((o) => (
          <li
            key={o.id}
            onClick={() => navigate(Array.isArray(o.path) ? o.path[0] : o.path)}
            className={[
              isSelected(o)
                ? "after:content-[''] after:absolute after:top-0 after:left-0 after:w-[3px] after:bg-[green] after:rounded-r-[10px] after:h-full"
                : "",
            ].join(" ")}
          >
            <Icon
              icon={isSelected(o) ? o?.icon_alt || o.icon : o.icon}
              fill={o?.icon_fill || null}
              viewBox={
                isSelected(o)
                  ? o?.icon_alt_viewbox || null
                  : o?.icon_viewbox || null
              }
              color="#22231F"
              size="16"
            />
            <p>{o.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
