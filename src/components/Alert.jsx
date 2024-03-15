import Icon from "../components/Icon";
import { useEffect, useState } from "react";

const Alert = ({
  time,
  onEnd = () => {},
  title,
  className,
  text,
  is_error,
}) => {
  const [init, setInit] = useState(false);

  /** Saat load, setel init ke true. metode ini digunakan untuk mencegah multiple load dari <React.StrictMode/> */
  useEffect(() => {
    if (!init) {
      setInit(true);
    }
    /** Saat unload setel init ke false */
    return () => {
      setInit(false);
    };
  }, []);

  /** Saat value init berganti */
  useEffect(() => {
    /** Jika sudah ter-init */
    if (init) {
      /** Jalankan timer untuk alert selama yang diberikan atau 2500ms, lalu jalankan onEnd() yang diberikan dan setel init ke false */
      setTimeout(() => {
        onEnd();
        setInit(false);
      }, time || 2500);
    }
  }, [init]);

  return (
    <div
      className={[
        "flex-col py-3 px-4 w-full max-w-[300px] absolute top-0 right-0 flex items-start gap-y-1 border rounded-[10px]",
        is_error
          ? "bg-[#FEE4E2] border-[#912018]"
          : "bg-[#E7F6DB] border-[#214405]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-x-1.5">
        <Icon icon="info" size="16" color={is_error ? "#B42318" : "#2A5707"} />
        <p
          className={[
            "text-base font-semibold",
            is_error ? "text-[#B42318]" : "text-[#2A5707]",
          ].join(" ")}
        >
          {title}
        </p>
      </div>
      <p
        className={[
          "ml-[22px] text-xs",
          is_error ? "text-[#B42318]" : "text-[#2A5707]",
        ].join(" ")}
      >
        {text}
      </p>
    </div>
  );
};

export default Alert;
