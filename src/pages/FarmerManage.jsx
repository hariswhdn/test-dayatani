import { useEffect, useState } from "react";
import Field from "../components/Field";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getFarmer, addFarmer, editFarmer } from "../stores/farmerSlice";
import { obj_text_alert, arr_error } from "../utils/text";

const FarmerManage = ({ objDialog, setObjDialog, setObjAlert }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { loading, farmer, error } = useSelector((state) => state.farmer);

  const [init, setInit] = useState(false);
  const [name, setName] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [arrError, setArrError] = useState([]);
  const [isCanError, setIsCanError] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);

  /** Saat load, setel init ke true. metode ini digunakan untuk mencegah multiple load dari <React.StrictMode/> */
  useEffect(() => {
    if (!init) {
      setInit(true);
    }
    /** Saat unload setel init ke false dan panggil resetThisPage() untuk reset state halaman ke semula */
    return () => {
      setInit(false);
      resetThisPage();
    };
  }, []);

  const resetThisPage = () => {
    setName("");
    setIdCardNumber("");
    setBirthDate("");
    setArrError([]);
    setIsCanError(false);
    setIsReadOnly(true);
  };

  /** Saat value init atau params berganti */
  useEffect(() => {
    /** Jika sudah ter-init */
    if (init) {
      /** Setel isReadOnly ke false jika halaman adalah edit atau add */
      if (
        location.pathname.includes("/farmer/edit") ||
        location.pathname.includes("/farmer/add")
      ) {
        setIsReadOnly(false);
      }
      /** Jika params.id ada di URL dan sedang tidak fetching */
      if (params?.id && !loading) {
        /** Fetching get farmer */
        dispatch(getFarmer(params.id));
      }
    }
  }, [init, params]);

  /** Saat value farmer berganti */
  useEffect(() => {
    /** Jika object farmer yang masuk tidak kosong, setel value ke field */
    if (Object.keys(farmer).length > 0) {
      setName(farmer.name);
      setIdCardNumber(farmer.idCardNumber);
      setBirthDate(farmer.birthDate);
    }
  }, [farmer]);

  const checkIsError = () => {
    setArrError([]);
    /** Jika name kosong */
    if (!(name.length > 0)) {
      setArrError((v) => [...v, "name"]);
    }
    /** Jika idCardNumber kosong */
    if (!(idCardNumber.length > 0)) {
      setArrError((v) => [...v, "idCardNumber"]);
    }
    /** Jika birthDate kosong */
    if (!(birthDate.length > 0)) {
      setArrError((v) => [...v, "birthDate"]);
    }
  };

  /** Saat value field berganti */
  useEffect(() => {
    if (isCanError) {
      checkIsError();
    }
  }, [name, idCardNumber, birthDate]);

  const onSubmit = (e) => {
    e.preventDefault();
    /** Setel isCanError ke true agar saat value field berganti, terjadi check error */
    setIsCanError(true);
    /** Jika value field ada yang kosong, jalankan check error dan hentikan proses */
    if (
      !(name.length > 0) ||
      !(idCardNumber.length > 0) ||
      !(birthDate.length > 0)
    ) {
      checkIsError();
      return false;
    }
    const obj = {
      name: name,
      action: params?.id ? "edit" : "add",
    };
    if (params?.id) {
      obj.id = params.id;
    }
    /** Munculkan dialog konfirmasi */
    setObjDialog(obj);
  };

  const doDialogYes = () => {
    /** Jika sedang tidak fetching */
    if (!loading) {
      const data = {
        name: name,
        idCardNumber: idCardNumber,
        birthDate: birthDate,
      };
      if (params?.id) {
        data.id = params.id;
      }
      /** Jika ada params.id, fetch edit, jika tidak, fetch add farmer */
      dispatch(params?.id ? editFarmer(data) : addFarmer(data)).then((ok) => {
        /** Jika fetch success */
        if (ok) {
          /** Munculkan alert */
          setObjAlert({
            /** teks pada obj_text_alert menyesuaikan aksi dari dialog */
            title: obj_text_alert[objDialog.action].success.title,
            text: obj_text_alert[objDialog.action].success.text,
            is_error: false,
          });
          /** Sembunyikan dialog */
          setObjDialog(null);
          /** Alihkan ke / */
          navigate("/");
        }
      });
    }
  };

  /** Saat value objDialog berganti dari komponen ini atau parent */
  useEffect(() => {
    /** Jika objDialog memiliki is_loading = true yang dihasilkan Yes pada Dialog */
    if (objDialog?.is_loading) {
      doDialogYes();
    }
  }, [objDialog]);

  /** Saat value error berganti dari fetching yang error */
  useEffect(() => {
    if (error) {
      /** Sembunyikan dialog */
      setObjDialog(null);
      /** Munculkan alert */
      setObjAlert({
        /** teks pada arr_error menyesuaikan angka dari error */
        title: arr_error[error].title,
        text: arr_error[error].text,
        is_error: true,
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex min-h-10 items-center">
        <p className="text-xl font-semibold text-[#111110]">
          {location.pathname.includes("/farmer/edit")
            ? "Edit"
            : location.pathname.includes("/farmer/add")
            ? "Add"
            : "Detail"}
          &nbsp;Farmer
        </p>
      </div>
      <div className="flex flex-col relative">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="flex flex-col bg-[#FEFDF8] rounded-3xl p-6 gap-y-5 w-full max-w-[760px]"
        >
          <Field
            /** Jika menemukan fieldnya di arrError */
            isError={arrError.indexOf("name") >= 0}
            textError="Please fill in this field"
            value={name}
            placeholder="Enter Name"
            label="Farmer Name"
            name="name"
            disabled={isReadOnly}
            onInput={(e) => setName(e.target.value)}
          />
          <Field
            /** Jika menemukan fieldnya di arrError atau error cocok */
            isError={arrError.indexOf("idCardNumber") >= 0 || error === 409}
            textError={
              error === 409
                ? "Oops! There's a Conflict Here"
                : "Please fill in this field"
            }
            value={idCardNumber}
            type="number"
            placeholder="Enter ID Card Number"
            label="ID Card Number"
            name="idCardNumber"
            disabled={isReadOnly}
            onInput={(e) => setIdCardNumber(e.target.value)}
          />
          <Field
            /** Jika menemukan fieldnya di arrError */
            isError={arrError.indexOf("birthDate") >= 0}
            textError="Please fill in this field"
            value={birthDate}
            type="date"
            placeholder="Enter Birthdate"
            label="Birthdate"
            name="birthDate"
            disabled={isReadOnly}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {
            /** Jika tidak di halaman detail, berarti add/edit */
            !isReadOnly ? (
              <button
                type="submit"
                className="flex place-self-end items-center justify-center px-4 py-[9px] bg-[#00371D] text-[#CCEE24] border border-[#00371D] font-semibold rounded-xl"
              >
                {location.pathname.includes("/farmer/edit")
                  ? "Save Edit"
                  : "Add Farmer"}
              </button>
            ) : (
              <></>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default FarmerManage;
