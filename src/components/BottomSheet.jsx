import Icon from "../components/Icon";

const BottomSheet = ({ options, onSelect, onClose }) => {
  return (
    <div className="w-full flex flex-col gap-y-3 absolute bottom-0 py-[18px] left-0 rounded-t-3xl z-10 bg-[#FEFDF8]">
      <div className="w-8 h-1 bg-[#BBBEAB] rounded mx-auto"></div>
      <div className="flex items-center justify-between px-5">
        <p className="text-lg font-semibold">Actions</p>
        <button type="button" className="flex" onClick={() => onClose()}>
          <Icon icon="close" color="#22231F" />
        </button>
      </div>
      <ul
        className={[
          "text-base font-bold flex flex-col",
          "[&>li]:flex [&>li]:cursor-pointer [&>li]:gap-x-3 [&>li]:px-5 [&>li]:py-2",
        ].join(" ")}
      >
        {options.map((o) => (
          <li key={o.id} onClick={() => onSelect(o.action)}>
            <Icon icon={o.icon} color="#4D4F47" />
            <p>{o.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomSheet;
