import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/photo/:id" element={<ImageDetails />} />
      </Routes>
    </section>
  );
}

export default App;
