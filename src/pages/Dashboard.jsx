import { cloneElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import BottomSheet from "../components/BottomSheet";
import { obj_text_dialog, arr_text_table_action } from "../utils/text";
import { farmerSlice } from "../stores/farmerSlice";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [objDialog, setObjDialog] = useState(null);
  const [objAlert, setObjAlert] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [objBottomSheet, setObjBottomSheet] = useState(null);

  return (
    <section
      className={[
        "w-full min-w-[360px] min-h-[100dvh] flex bg-[#EDEFE3] relative",
        showSidebar || objBottomSheet
          ? "[&:after]:max-md:content-[''] [&:after]:max-md:absolute [&:after]:max-md:top-0 [&:after]:max-md:left-0 [&:after]:max-md:w-full [&:after]:max-md:h-full [&:after]:max-md:bg-black/20 [&:after]:max-md:z-20"
          : "",
      ].join(" ")}
    >
      <Sidebar
        showSidebar={showSidebar ? true : false}
        setShowSidebar={(v) => setShowSidebar(v)}
      />
      <main
        className={[
          "py-6 px-[30px] gap-y-3 flex flex-col w-full",
          "max-md:px-5",
        ].join(" ")}
      >
        <Navbar setShowSidebar={(v) => setShowSidebar(v)} />
        <div className={["relative flex flex-col", "max-md:h-full"].join(" ")}>
          {
            /** Jika objAlert disetel, munculkan alert */
            objAlert ? (
              <div className="sticky -top-[38px] z-10">
                <Alert
                  className="top-[calc(40px_+_12px)]"
                  title={objAlert.title}
                  text={objAlert.text}
                  is_error={objAlert.is_error}
                  onEnd={() => {
                    /** Saat alert selesai */
                    /** Jika alert error (dari fetching), setel error ke null */
                    if (objAlert.is_error) {
                      dispatch(farmerSlice.actions.setError(null));
                    }
                    /** Sembunyikan alert */
                    setObjAlert(null);
                  }}
                />
              </div>
            ) : (
              <></>
            )
          }
          {cloneElement(children, {
            objDialog: objDialog,
            setObjDialog: (v) => setObjDialog(v),
            setObjAlert: (v) => setObjAlert(v),
            setObjBottomSheet: (v) => setObjBottomSheet(v),
          })}
        </div>
      </main>
      {objBottomSheet ? (
        <div
          className={[
            "sticky top-[calc(100%_-_212px)] w-full h-[212px] -ml-[100%] z-30",
            "md:hidden",
          ].join(" ")}
        >
          <BottomSheet
            onSelect={(v) => {
              /** Mencocokkan aksi, sembunyikan dropdown */
              v === "view"
                ? navigate("/farmer/" + objBottomSheet.id)
                : v === "edit"
                ? navigate("/farmer/edit/" + objBottomSheet.id)
                : setObjDialog({
                    id: objBottomSheet.id,
                    name: objBottomSheet.name,
                    action: v,
                  });
              setObjBottomSheet(null);
            }}
            onClose={() => setObjBottomSheet(null)}
            options={[
              arr_text_table_action[1],
              arr_text_table_action[2],
              arr_text_table_action[0],
            ]}
          />
        </div>
      ) : (
        <></>
      )}
      {
        /** Jika objDialog disetel, munculkan dialog */
        objDialog ? (
          <Dialog
            isLoading={objDialog?.is_loading || false}
            action={objDialog.action}
            title={obj_text_dialog[objDialog.action].title}
            text={obj_text_dialog[objDialog.action].text.replace(
              "$name",
              objDialog?.name || ""
            )}
            no_text={obj_text_dialog[objDialog.action].no}
            yes_text={obj_text_dialog[objDialog.action].yes}
            yes={() =>
              /** Setel is_loading ke true tanda bahwa konfirmasi yes */
              setObjDialog((v) => ({
                ...v,
                is_loading: true,
              }))
            }
            no={() => {
              /** Sembunyikan dialog */
              setObjDialog(null);
            }}
          />
        ) : (
          <></>
        )
      }
    </section>
  );
};

export default Dashboard;
