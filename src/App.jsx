// import Background from "./components/Background";
import Signup from "./components/UI/Signup";
import { DocProvider } from "./context/DocProvider";
import { ModalProvider } from "./context/ModalContext";
const App = () => {
      return (
            <ModalProvider>
                  <DocProvider>
                        {/* <Background /> */}
                        <Signup />
                  </DocProvider>
            </ModalProvider>
      );
};

export default App;
