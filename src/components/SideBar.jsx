import { MdOutlineCreateNewFolder } from "react-icons/md";
import { motion } from "motion/react";

const SideBar = () => {
      return (
            <section className="w-[10%] bg-[#1B1B1D]  p-3 rounded-2xl h-full ">
                  <motion.div whileHover={{ backgroundColor: "#FEE685", color: "black" }} className="flex px-2 tracking-tighter leading-none  rounded-xl justify-center items-center cursor-pointer gap-1">
                        <MdOutlineCreateNewFolder size={"3rem"} />
                        <h1 className="shrink-0  font-[Roboto]  leading-none tracking-tighter">New Doc</h1>
                  </motion.div>
            </section>
      );
};

export default SideBar;
