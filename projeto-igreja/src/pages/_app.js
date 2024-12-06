// pages/_app.js
import '../styles/escolha.css';
import '../styles/globals.css'; // Importando o CSS Global
import '../styles/escolhaconv.css';
import '../styles/inscricao.css';
import '../styles/pagamento.css';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Carregar outras configurações globais, como fontes ou scripts se necessário
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;



