import { useRef } from "react";
import { Card } from "./export";
const Card_Container = () => {
      const constraint = useRef(null);
      return (
            <section ref={constraint} className="w-full h-full flex  overflow-y-scroll [&::-webkit-scrollbar]:hidden flex-wrap   gap-x-3 p-2 ">
                  <Card constraint={constraint} />
            </section>
      );
};

export default Card_Container;
