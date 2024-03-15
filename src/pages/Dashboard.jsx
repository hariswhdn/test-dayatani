import { cloneElement, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dialog from "../components/Dialog";
import Alert from "../components/Alert";
import { obj_text_dialog } from "../utils/text";
import { farmerSlice } from "../stores/farmerSlice";

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();

  const [objDialog, setObjDialog] = useState(null);
  const [objAlert, setObjAlert] = useState(null);

  return (
    <section className="w-full min-h-[100dvh] flex bg-[#EDEFE3] relative">
      <Sidebar />
      <main className="py-6 px-[30px] gap-y-3 flex flex-col w-full">
        <Navbar />
        <div className="relative flex flex-col">
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
          })}
        </div>
      </main>
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
