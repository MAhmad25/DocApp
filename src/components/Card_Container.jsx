import { useEffect, useRef, useState } from "react";
import { Card, SekeletonCard } from "./export";
import docService from "../supabase/TableDataService";

const Card_Container = () => {
      const constraint = useRef(null);
      const [allRecords, setRecords] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            (async () => {
                  const data = await docService.getAllDoc();
                  setRecords(data);
                  setLoading(false);
            })();
      }, []);
      return (
            <section ref={constraint} className="w-full h-full overflow-y-scroll [&::-webkit-scrollbar]:hidden grid grid-cols-2 grid-rows-3 lg:grid-cols-4 gap-x-3 p-2">
                  {!loading ? allRecords.map((eachRecord) => <Card key={eachRecord.id} data={eachRecord} constraint={constraint} />) : Array.from({ length: 8 }).map((_, i) => <SekeletonCard key={i} />)}
            </section>
      );
};

export default Card_Container;
