import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFarmers, deleteFarmer } from "../stores/farmerSlice";
import Dropdown from "../components/Dropdown";
import Icon from "../components/Icon";
import spinner from "../assets/spinner.png";
import {
  obj_text_alert,
  arr_text_table_action,
  arr_error,
} from "../utils/text";

const Farmers = ({ objDialog, setObjDialog, setObjAlert }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, farmers, error } = useSelector((state) => state.farmer);

  const [init, setInit] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const [arrFarmers, setArrFarmers] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [idAction, setIdAction] = useState(0);

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
    setArrFarmers([]);
    setIsEnd(false);
    setOffset(0);
    setIdAction(0);
  };

  const fetchGetFarmers = () => {
    /** Jika sudah ter-init dan sedang tidak fetching */
    if (init && !loading) {
      /** Fetching get farmers */
      dispatch(getFarmers({ offset: offset, limit: limit }));
    }
  };

  /** Saat value init atau offset berganti */
  useEffect(() => {
    /** Jika sudah ter-init */
    if (init) {
      fetchGetFarmers();
    }
  }, [init, offset]);

  /** Saat value farmers berganti */
  useEffect(() => {
    /** Jika sudah ter-init dan array farmers yang masuk lebih dari 0 */
    if (init && farmers.length > 0) {
      /** Jika array farmers yang masuk kurang dari limit, setel isEnd ke true untuk menyembunyikan Load More */
      if (farmers.length < limit) {
        setIsEnd(true);
      }
      /** Jika arrFarmers tidak memiliki item terakhir milik farmers, gabungkan */
      const id = farmers[farmers.length - 1].id;
      if (arrFarmers.map((o) => o.id).indexOf(id) === -1) {
        setArrFarmers((v) => [...v, ...farmers]);
      }
    }
  }, [farmers]);

  const doDialogYes = () => {
    /** Jika sedang tidak fetching */
    if (!loading) {
      /** Fetching delete farmers */
      dispatch(deleteFarmer(objDialog.id)).then((ok) => {
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
          /** Reset state halaman ke semula */
          resetThisPage();
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
      <div className="min-h-10 flex items-center justify-between w-full">
        <p className="text-xl font-semibold text-[#111110]">Farmer List</p>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-[9px] bg-[#00371D] text-[#CCEE24] border border-[#00371D] font-semibold rounded-lg"
          onClick={() => navigate("/farmer/add")}
        >
          Add Farmer
        </button>
      </div>
      <div className="flex flex-col">
        <table className="w-full">
          <thead
            className={[
              "[&>tr>th]:px-2 [&>tr>th]:py-3 [&>tr>th]:text-[#74766A] [&>tr>th]:font-semibold",
              "[&>tr>th:first-child]:text-center [&>tr>th]:text-left [&>tr>th:first-child]:w-[1%] [&>tr>th:last-child]:w-[1%]",
            ].join(" ")}
          >
            <tr>
              <th>No</th>
              <th>Farmer Name</th>
              <th>ID Card Number</th>
              <th>Birthdate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody
            className={[
              "bg-white",
              "[&>tr>td]:bg-white [&>tr>td]:px-3 [&>tr>td]:py-3.5 [&>tr>td]:border-b [&>tr>td]:border-b-[#E7EAEE]",
              "[&>tr:first-child>td:first-child]:rounded-tl-3xl [&>tr:first-child>td:last-child]:rounded-tr-3xl",
              "[&>tr>td:first-child]:text-center [&>tr>td:last-child]:text-center",
            ].join(" ")}
          >
            {arrFarmers.map((o, i) => (
              <tr key={o.id}>
                <td>{i + 1}</td>
                <td>{o.name}</td>
                <td>{o.idCardNumber}</td>
                <td>
                  {
                    /** Format ke 17 Agustus 1945 */
                    new Intl.DateTimeFormat("id-ID", {
                      dateStyle: "long",
                    }).format(new Date(o.birthDate))
                  }
                </td>
                <td>
                  <div className="relative">
                    <button
                      type="button"
                      className={[
                        "flex items-center justify-center rounded-full border",
                        idAction === o.id
                          ? "bg-[#EDEFE3] border-[#EDEFE3]"
                          : "bg-transparent border-transparent",
                      ].join(" ")}
                      onClick={() => {
                        /** Munculkan dropdown dengan id row ini, atau sembunyikan jika sama */
                        setIdAction((v) => (v === o.id ? null : o.id));
                      }}
                    >
                      <Icon icon="more_vert" color="#74766A" size="28" />
                    </button>
                    {
                      /** Jika id row sama dengan idAction */
                      o.id === idAction && (
                        <Dropdown
                          options={arr_text_table_action}
                          isBottom={i === arrFarmers.length - 1}
                          onSelect={(v) => {
                            /** Sembunyikan dropdown, cocokkan aksi */
                            setIdAction(0);
                            v === "view"
                              ? navigate("/farmer/" + o.id)
                              : v === "edit"
                              ? navigate("/farmer/edit/" + o.id)
                              : setObjDialog({
                                  id: o.id,
                                  name: o.name,
                                  action: v,
                                });
                          }}
                        />
                      )
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-white rounded-b-3xl w-full flex py-3 justify-center">
          {
            /** Jika sedang fetching */
            loading ? (
              <button
                type="button"
                className="flex items-center justify-center px-4 py-[7px] bg-white border border-[#00371D] rounded-lg"
                disabled={true}
              >
                <img
                  src={spinner}
                  className="animate-spin w-6 h-6"
                  alt="spinner"
                />
              </button>
            ) : /** Atau jika sudah tidak ada data lagi yang bisa ditampilan */
            isEnd ? (
              <p className="text-black font-semibold text-base">
                You've hit the end of the page.
              </p>
            ) : (
              <button
                type="button"
                className="flex items-center justify-center text-base px-4 py-[7px] bg-white text-[#00371D] border border-[#00371D] font-semibold rounded-lg"
                onClick={() => {
                  /** Tambah offset senilai limit */
                  setOffset((v) => v + limit);
                }}
              >
                Load More
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Farmers;
