const Field = ({
  isError = false,
  textError = "",
  label,
  type = "text",
  value,
  placeholder = "",
  name = false,
  required = false,
  disabled = false,
  onInput = () => {},
  onChange = () => {},
}) => {
  return (
    <label className="flex flex-col">
      {label ? <p className="text-lg font-semibold mb-2.5">{label}</p> : <></>}
      <input
        className={[
          "border bg-white rounded-[10px] py-[11px] text-base px-4",
          isError ? "border-[#E53348] text-[#E53348]" : "border-[#E6E6E6]",
        ].join(" ")}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onInput={onInput}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete="off"
        spellCheck="false"
      />
      {isError ? (
        <p className="mt-2 text-[#E53348] font-semibold">{textError}</p>
      ) : (
        <></>
      )}
    </label>
  );
};

export default Field;
