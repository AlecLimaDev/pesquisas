import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { styled } from "styled-components";
import Navbar from "./components/Navbar/index.tsx";
import Home from "./pages/Home/index.tsx";
import About from "./pages/Pesquisas/index.tsx";
import Estatistic from "./pages/Estatistica/index.tsx";
import { StyledFooter } from "./components/Footer/styled.ts";



const App: React.FC = () => {
  const Container = styled.div``;

  return (
    <>
      <AuthProvider value={{}}>
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pesquisas" element={<About />} />
              <Route path="/estatistica" element={<Estatistic />} />
            </Routes>
          </Container>
          <StyledFooter />
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
