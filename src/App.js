import { Routes, Route } from "react-router-dom";
import { Home, Work, Contact, NotFound, ThankYou } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
