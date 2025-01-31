import { useRef } from "react";
import Card from "./Card";
const Card_Container = () => {
      const constraint = useRef(null);
      return (
            <section ref={constraint} className="w-full h-full flex flex-wrap  gap-x-3 p-2 ">
                  <Card constraint={constraint} />
                  <Card constraint={constraint} />
                  <Card constraint={constraint} />
                  <Card constraint={constraint} />
                  <Card constraint={constraint} />
            </section>
      );
};

export default Card_Container;
