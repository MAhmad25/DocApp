import Background from "./components/Background";
import { ModalProvider } from "./context/ModalContext";
const App = () => {
      return (
            <ModalProvider>
                  <Background />
            </ModalProvider>
      );
};

export default App;
