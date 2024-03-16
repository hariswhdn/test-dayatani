import Icon from "../components/Icon";

const Dropdown = ({ options, isBottom, onSelect }) => {
  return (
    <ul
      className={[
        "border border-[#E1E3D4] text-[#4D4F47] divide-[#E1E3D4] rounded-xl absolute z-10 text-base font-bold right-[calc(100%_+_6px)] bg-white flex flex-col divide-y",
        isBottom ? "bottom-0" : "top-0",
        "[&>li]:flex [&>li]:cursor-pointer [&>li]:gap-x-3 [&>li]:px-3 [&>li]:py-2",
      ].join(" ")}
    >
      {options.map((o) => (
        <li key={o.id} onClick={() => onSelect(o.action)}>
          <Icon icon={o.icon} color={o.is_danger ? "#E53348" : "#4D4F47"} />
          <p className={o.is_danger ? "text-[#B42318]" : ""}>{o.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
