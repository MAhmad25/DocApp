import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const AddButton = () => {
      const { openModal, setModal } = useContext(ModalContext);
      return (
            <button
                  onClick={() => setModal((prev) => !prev)}
                  type="button"
                  className="
        cursor-pointer select-none
        border-4 border-black
        bg-gray-400
        pb-[10px]
        transition-all duration-100
        transform
        active:pb-0 active:mb-[10px] active:translate-y-[10px]

      "
            >
                  <div className="bg-[var(--bg-back-primary)] border-4 border-white flex justify-center gap-2 items-center px-[8px] py-[3px]">
                        <div
                              className="
          w-full text-2xl
          flex items-center justify-center
          transition-all duration-300
        "
                        >
                              +
                        </div>
                        <span className="text-xl tracking-[1px]">{openModal ? "Close" : "Create"}</span>
                  </div>
            </button>
      );
};

export default AddButton;
