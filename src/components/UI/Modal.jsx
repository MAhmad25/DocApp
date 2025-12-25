import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/ModalContext";

const Modal = (prop) => {
      const { setModal } = useContext(ModalContext);
      useEffect(() => {
            document.body.classList.add("overflow-hidden");
            document.documentElement.style.overflow = "hidden";
            document.body.style.height = "100dvh";
            return () => {
                  document.documentElement.style.overflow = "auto";
                  document.body.style.height = "";
                  document.body.classList.remove("overflow-hidden");
            };
      }, []);

      return (
            <section
                  onClick={(e) => {
                        if (e.target === e.currentTarget) {
                              setModal(false);
                        }
                  }}
                  style={{
                        backgroundImage: "radial-gradient(transparent 1px, var(--bg-back-primary) 1px)",
                        backgroundSize: "3px 3px",
                        backdropFilter: "brightness(1) blur(10px)",
                        willChange: "filter, opacity, transform",
                  }}
                  className="w-full h-full fixed  inset-0 z-30 grid place-content-center"
            >
                  {prop.children}
            </section>
      );
};

export default Modal;
