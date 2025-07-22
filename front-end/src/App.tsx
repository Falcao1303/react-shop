import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/pages/Login/LoginPage';

// Vamos criar um componente simples de "Home" só para ter outra página
function HomePage() {
  return <h1>Bem-vindo à Página Inicial!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;