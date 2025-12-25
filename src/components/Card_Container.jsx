import { DocContext } from "../context/DocProvider";
import { Card, SekeletonCard } from "./export";
import { useContext, useRef } from "react";

const Card_Container = () => {
      const constraint = useRef(null);
      const { loading, allDocs } = useContext(DocContext);
      return (
            <section ref={constraint} className="w-full h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden grid grid-cols-2 grid-rows-3 lg:grid-cols-4 gap-x-3 p-2">
                  {!loading ? allDocs?.map((eachRecord) => <Card key={eachRecord.id} data={eachRecord} constraint={constraint} />) : Array.from({ length: 8 }).map((_, i) => <SekeletonCard key={i} />)}
            </section>
      );
};

export default Card_Container;
