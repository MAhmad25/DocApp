import { Foreground } from "./export";
import { Toaster } from "react-hot-toast";

const Background = () => {
      return (
            <section className="w-full  relative h-screen flex justify-center items-center bg-[var(--bg-back-primary)] text-white">
                  <Toaster position="top-right" reverseOrder={false} />;<div className="text-9xl pointer-events-none font-[Roboto] tracking-tighter leading-none text-zinc-500">Doc.</div>
                  <Foreground />
            </section>
      );
};

export default Background;
