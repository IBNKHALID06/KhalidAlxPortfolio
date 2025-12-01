import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EntrepreneurialJourney from "./pages/EntrepreneurialJourney";
import Solution from "./pages/Solution";
import Prototype from "./pages/Prototype";
import ReflectionFuture from "./pages/ReflectionFuture";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b0f19] text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<EntrepreneurialJourney />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/prototype" element={<Prototype />} />
            <Route path="/reflection" element={<ReflectionFuture />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;