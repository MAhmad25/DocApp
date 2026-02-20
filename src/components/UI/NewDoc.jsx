import { useContext, useState } from "react";
import docObj from "../../supabase/TableDataService";
import { ModalContext } from "../../context/ModalContext";
import { DocContext } from "../../context/DocProvider";
import { sileo } from "sileo";

const NewDocForm = () => {
      const [pending, setPending] = useState(false);
      const { setModal } = useContext(ModalContext);
      const { insertDoc } = useContext(DocContext);
      const handleSubmit = async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const title = formData.get("title");
            const content = formData.get("content");
            setPending(true);
            const isArticleCreated = docObj.createDoc({ title, content });
            console.log(isArticleCreated);
            const newDoc = await sileo.promise(isArticleCreated, {
                  loading: { title: "Saving..." },
                  success: { title: "Your note have been saved!", description: title },
                  error: { title: "Failed" },
            });
            insertDoc(newDoc[0]);
            form.reset();
            setModal(false);
      };
      return (
            <form onSubmit={handleSubmit} className="bg-[var(--bg-black-primary)] border border-slate-200 grid grid-cols-6 gap-3 rounded-xl p-4 text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <h1 className="text-center text-[var(--txt)]  text-2xl font-bold col-span-6 mb-2">Leave a Note</h1>
                  <input name="title" type="text" required className="bg-transparent [&::-webkit-scrollbar]:hidden border border-slate-200 col-span-6 row-span-1 resize-none  outline-none rounded-lg p-3 duration-300  focus:border-slate-600 focus:ring-2 focus:ring-slate-200 focus:shadow-inner" placeholder="Title" />
                  <textarea name="content" required className="bg-transparent [&::-webkit-scrollbar]:hidden text-[var(--txt)] h-32  border border-slate-200 col-span-6 row-span-2 resize-none outline-none rounded-lg p-3 duration-300  focus:border-slate-600 focus:ring-2 focus:ring-slate-200 focus:shadow-inner" placeholder="Type your content here..."></textarea>

                  <button disabled={pending} type="submit" className="bg-[var(--bg-back-primary)]  border border-slate-200 col-span-2 flex items-center justify-center gap-2 rounded-lg p-3 duration-300  active:scale-95 stroke-[var(--txt)] focus:bg-blue-400 hover:shadow-md group">
                        <svg className="transform transition-transform  group-hover:translate-x-1 duration-200" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                              <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M10.11 13.6501L13.69 10.0601" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="font-medium text-[var(--txt)] ">Save it</span>
                  </button>
            </form>
      );
};

export default NewDocForm;
