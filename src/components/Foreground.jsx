import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { CardContainer, Add, Modal, NewDoc } from "./export";

const Foreground = () => {
      const { openModal } = useContext(ModalContext);
      return (
            <section className="absolute  flex justify-center items-center top-0 left-0 w-full h-dvh">
                  {openModal && (
                        <Modal>
                              <NewDoc />
                        </Modal>
                  )}

                  <section className="w-full  relative overflow-hidden p-3 flex justify-between gap-2 items-center h-full">
                        <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2">
                              <Add />
                        </div>
                        <CardContainer />
                  </section>
            </section>
      );
};

export default Foreground;
