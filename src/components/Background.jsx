import Forground from "./Foreground";

const Background = () => {
      return (
            <section className="w-full  relative h-screen flex justify-center items-center bg-zinc-800 text-white">
                  <div className="text-9xl pointer-events-none font-[Roboto] tracking-tighter leading-none text-zinc-500">Doc.</div>
                  <Forground />
            </section>
      );
};

export default Background;
