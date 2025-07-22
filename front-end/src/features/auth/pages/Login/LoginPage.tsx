// Em: src/features/auth/pages/LoginPage.tsx

import { useState } from 'react'; // 1. Importe o useState
import './LoginPage.css';

export function LoginPage() {
  // 2. Crie os estados para guardar os valores dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    // 1. Crie a função para lidar com o envio
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    
    console.log('Dados do login:', { email, password });

  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Entrar na Plataforma</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="seu@email.com"
            value={email} // 3. Conecte o valor do input ao estado
            onChange={(e) => setEmail(e.target.value)} // 4. Atualize o estado quando o usuário digitar
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password} // 3. Conecte o valor do input ao estado
            onChange={(e) => setPassword(e.target.value)} // 4. Atualize o estado quando o usuário digitar
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}