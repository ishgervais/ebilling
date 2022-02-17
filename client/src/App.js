// import './App.css';
import { Toaster } from "react-hot-toast";
import PageRoutes from "./components/PageRoutes";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      <PageRoutes />
    </>
  );
}

export default App;
