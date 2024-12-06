import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Escolha sua Opção</title>
        <link rel="stylesheet" href="/css/escolhaconv.css" />
      </Head>

      <div className="barra-superior">
        <h2>IBCD Jovens</h2>
      </div>

      <div className="container">
        <div className="card">
          <h1 className='conhece'>Já conhece o caminho até a nossa igreja?</h1>
        
          <div className="button-container">
            <Link href="/inscricao">
              <button className="btn convidado">Sim 😁</button>
            </Link>
            <Link href="/igreja">
              <button className="btn membro">Não 😒</button>
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
