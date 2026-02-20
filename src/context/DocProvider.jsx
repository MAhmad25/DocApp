import { createContext, useEffect, useState } from "react";
import docService from "../supabase/TableDataService";

const DocContext = createContext();
const DocProvider = (prop) => {
      const [allDocs, setAllDocs] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            (async () => {
                  try {
                        const data = await docService.getAllDoc();
                        setAllDocs(data);
                        setLoading(false);
                  } catch (error) {
                        console.log("The Project have been paused:-", error.message);
                  }
            })();
      }, []);
      const insertDoc = (newDoc) => {
            setAllDocs((prev) => [...prev, newDoc]);
      };
      const removeDoc = (id) => {
            const remained = allDocs.filter((doc) => doc.id != id);
            setAllDocs(remained);
      };
      const states = { allDocs, setAllDocs, loading, insertDoc, removeDoc };
      return <DocContext.Provider value={states}>{prop.children}</DocContext.Provider>;
};

export { DocProvider, DocContext };
