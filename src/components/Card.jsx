/* eslint-disable react/prop-types */
import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { useRef } from "react";
const size = "1rem";
const Card = ({ constraint, data }) => {
      const card = useRef(null);
      return (
            <motion.div ref={card} className="lg:min-w-52 lg:min-h-60 min-w-32 min-h-40 cursor-grab relative font-[Roboto]  shrink-0 p-4 backdrop-blur-md bg-[var(--card)]/30" drag dragTransition={{ bounceStiffness: 600, timeConstant: 1000, bounceDamping: 10, power: 1 }} dragElastic={1} whileDrag={{ scale: 1.1, zIndex: 9999999 }} dragConstraints={constraint}>
                  <span className="absolute opacity-30 -top-2 -left-2">
                        <GoPlus />
                  </span>
                  <span className="absolute -top-2 opacity-30 -right-2">
                        <GoPlus />
                  </span>
                  <span className="absolute -bottom-2 opacity-30 -left-2">
                        <GoPlus />
                  </span>
                  <span className="absolute -bottom-2 opacity-30 -right-2">
                        <GoPlus />
                  </span>
                  <div className="w-full cursor-pointer flex justify-between items-center">
                        <IoDocumentTextOutline size={size} />
                        <button>
                              <AiOutlineDelete color="red" size={size} />
                        </button>
                  </div>
                  <p className="leading-none [&::-webkit-scrollbar]:hidden overflow-y-scroll break-words  max-h-[70%] text-[var(--txt)] lg:text-sm text-xs  mt-3"> {data.content}</p>
                  <motion.div className={`absolute border-t-[0.1px]  [&::-webkit-scrollbar]:hidden font-semibold  bg-[var(--bg-back-primary)] text-[var(--txt)] transition-all duration-75 max-h-[30%] cursor-pointer bottom-0 left-0 overflow-y-scroll right-0 w-full text-center text-xs lg:text-sm lg:p-4`}>{data.title}</motion.div>
            </motion.div>
      );
};

export default Card;
