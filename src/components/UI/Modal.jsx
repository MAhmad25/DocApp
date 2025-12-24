import { useEffect } from "react";

const Modal = (prop) => {
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

      return <section className="w-full h-full bg-gray-500 grid place-content-center">{prop.children}</section>;
};

export default Modal;
