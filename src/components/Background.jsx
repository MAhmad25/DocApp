import { Foreground } from "./export";
import { Toaster } from "sileo";

const Background = () => {
      return (
            <section className="w-full  relative h-dvh flex justify-center items-center bg-[var(--bg-back-primary)] text-[var(--txt)]">
                  <Toaster
                        position="top-right"
                        options={{
                              fill: "black",
                              styles: {
                                    title: "text-white!",
                                    description: "text-white/75!",
                              },
                        }}
                  />
                  <div className="min-h-screen w-full bg-black relative">
                        <div
                              className="absolute inset-0 z-0"
                              style={{
                                    backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(20, 18, 11, 0.6) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(20, 18, 11, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(255, 215, 0, 0.3) 0%, transparent 80%)
        `,
                              }}
                        />
                        <Foreground />
                  </div>
            </section>
      );
};

export default Background;
