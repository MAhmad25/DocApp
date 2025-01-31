import Card_Container from "./Card_Container";
import SideBar from "./SideBar";

const Foreground = () => {
      return (
            <section className="absolute flex justify-center items-center top-0 left-0 w-full h-screen">
                  <section className="w-full overflow-hidden p-3 flex justify-between gap-2 items-center h-full">
                        <SideBar />
                        <Card_Container />
                  </section>
            </section>
      );
};

export default Foreground;
