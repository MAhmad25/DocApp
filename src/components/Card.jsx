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
            <motion.div ref={card} className="w-52 cursor-grab relative font-[Roboto]  h-64  shrink-0 p-4 backdrop-blur-md bg-[var(--bg-back-primary)]/30" drag dragTransition={{ bounceStiffness: 600, timeConstant: 1000, bounceDamping: 10, power: 1 }} dragElastic={1} whileDrag={{ scale: 1.1 }} dragConstraints={constraint}>
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
                        <AiOutlineDelete color="red" size={size} />
                  </div>
                  <p className="leading-none text-zinc-300 text-sm  mt-3"> {data.content}</p>
                  <motion.div className={`absolute transition-all duration-75 cursor-pointer bottom-0 left-0 right-0 w-full text-center  p-4`}>{data.title}</motion.div>
            </motion.div>
      );
};

export default Card;
