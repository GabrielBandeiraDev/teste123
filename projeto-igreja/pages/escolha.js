import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Escolha sua Opção</title>
        <link rel="stylesheet" href="/styles/escolha.css" />
      </Head>

      <div className="barra-superior">
        <h2>IBCD Jovens</h2>
      </div>
      
      <div className="container">
        <div className="card">
          <h1>Você é ?</h1>
          <div className="button-container">
            <Link href="/inscricao">
              <button className="btn membro">Membro</button>
            </Link>
            <Link href="/escolhaconv">
              <button className="btn convidado">Novo por aqui..</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="barra-inferior">
        <p>&copy; 2024 IBCD Jovens | Todos os direitos reservados</p>
      </div>
    </>
  );
}
