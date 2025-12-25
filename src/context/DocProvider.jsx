import { createContext, useEffect, useState } from "react";
import docService from "../supabase/TableDataService";

const DocContext = createContext();
const DocProvider = (prop) => {
      const [allDocs, setAllDocs] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            (async () => {
                  const data = await docService.getAllDoc();
                  setAllDocs(data);
                  setLoading(false);
            })();
      }, []);
      const states = { allDocs, setAllDocs, loading };
      return <DocContext.Provider value={states}>{prop.children}</DocContext.Provider>;
};

export { DocProvider, DocContext };
