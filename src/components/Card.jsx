import { IoDocumentTextOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { AiOutlineDelete } from "react-icons/ai";
import { useRef, useState } from "react";
const size = "1.4rem";
const Card = ({ constraint }) => {
      let [cta, setCta] = useState("Done");
      const card = useRef(null);
      return (
            <motion.div ref={card} className="w-52 cursor-grab relative font-[Roboto] overflow-hidden h-64  shrink-0 p-6  rounded-3xl backdrop-blur-md bg-black/30" drag dragTransition={{ bounceStiffness: 600, timeConstant: 1000, bounceDamping: 10, power: 1 }} dragElastic={1} whileDrag={{ scale: 1.1 }} dragConstraints={constraint}>
                  <div className="w-full cursor-pointer flex justify-between items-center">
                        <IoDocumentTextOutline size={size} />
                        <AiOutlineDelete color="red" size={size} />
                  </div>
                  <p className="leading-none text-zinc-300 text-sm  mt-3">In no time, the clock began to chime. A mime did climb and solved the crime. Slime and lime made the scene sublime. Pastime and bedtime marked a lifetime of prime rhyme.</p>
                  <motion.div onClick={() => (cta === "Done" ? setCta("Completed") : setCta("Done"))} className={`absolute transition-all duration-75 cursor-pointer bottom-0 left-0 right-0 w-full text-center ${cta == "Done" ? "text-black bg-amber-200" : "text-white bg-green-500"} p-4`}>
                        {cta}
                  </motion.div>
            </motion.div>
      );
};

export default Card;
