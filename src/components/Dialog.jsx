import Icon from "../components/Icon";
import parse from "html-react-parser";
import spinner from "../assets/spinner.png";

const Dialog = ({
  isLoading,
  action,
  yes,
  no,
  title,
  text,
  no_text,
  yes_text,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/20 justify-center items-center flex">
      {
        /** Jika isLoading = true (tanda sudah yes), munculkan spinner */
        isLoading ? (
          <img src={spinner} className="animate-spin w-6 h-6" alt="spinner" />
        ) : (
          <div className="flex w-full max-w-[360px] flex-col bg-[#EDEFE3] rounded-[20px] divide-y divide-[#E1E3D4]">
            <div className="flex items-center justify-between px-5 py-3 font-semibold text-lg">
              <p className="text-[#111110]">{title}</p>
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={no}
              >
                <Icon icon="close" color="#22231F" size="24" />
              </button>
            </div>
            <div className="flex p-5">
              <p>
                {
                  /** parse digunakan untuk menerjemahkan <b/> dari text */
                  parse(text)
                }
              </p>
            </div>
            <div className="flex gap-x-4 py-3 justify-end px-5">
              <button
                type="button"
                className="flex items-center justify-center text-base px-4 py-[5px] bg-transparent text-[#00371D] border border-[#00371D] font-semibold rounded-lg"
                onClick={no}
              >
                {no_text}
              </button>
              <button
                type="button"
                className={[
                  "flex items-center justify-center text-base px-4 py-[5px] border font-semibold rounded-lg",
                  action === "delete"
                    ? "bg-[#E53348] text-[#FEFDF8] border-[#E53348]"
                    : "bg-[#00371D] text-[#CCEE24] border-[#00371D]",
                ].join(" ")}
                onClick={yes}
              >
                {yes_text}
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Dialog;
