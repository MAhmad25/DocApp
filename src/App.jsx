import Background from "./components/Background";
import { DocProvider } from "./context/DocProvider";
import { ModalProvider } from "./context/ModalContext";
const App = () => {
      return (
            <ModalProvider>
                  <DocProvider>
                        <Background />
                  </DocProvider>
            </ModalProvider>
      );
};

export default App;
