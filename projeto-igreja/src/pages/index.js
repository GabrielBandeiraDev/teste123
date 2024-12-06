// pages/index.js
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>ACAMP IBCD</h1>
        </div>
      </header>

      {/* Seção Hero */}
      <section className={styles.hero} id="hero">
        {/* Você pode adicionar conteúdo aqui, como um botão ou texto */}
      </section>

      {/* Seção de Informações */}
      <section className={styles.informacoes} id="informacoes">
        <h2>Sobre o Acampamento</h2>
        <p id="nosso">Nosso evento cristão é uma oportunidade única de vivenciar momentos de comunhão, aprendizado e diversão.</p>
        
        {/* Carrossel de Imagens */}
        <div className={styles.carrossel}>
        <div className={styles.slide}>
  <Image src="/images/fogueira.png" alt="Foto 1" width={400} height={300} />
</div>

          <div className={styles.slide}>
            <Image src="/images/2foto.png" alt="Foto 2" width={500} height={300} />
          </div>
          <div className={styles.slide}>
            <Image src="/images/3foto.png" alt="Foto 3" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Seção de Atividades */}
      <section className={styles.atividades} id="atividades">
        <h2>Atividades</h2>
        <p>Confira algumas das atividades que preparamos para você:</p>
        
        <div className={styles.atividadesGrid}>
          <div className={styles.atividade}>
            <h3>Louvores e Adoração</h3>
            <p>Conecte-se com Deus através da música.</p>
            <Image src="/images/adora.png" alt="Louvores" width={200} height={200} />
          </div>
          <div className={styles.atividade}>
            <h3>Estudos Bíblicos</h3>
            <p>Aprenda mais sobre a palavra de Deus com nossos estudos.</p>
            <Image src="/images/estudos.png" alt="Estudos Bíblicos" width={200} height={200} />
          </div>
          <div className={styles.atividade}>
            <h3>Comunhão</h3>
            <p>Momentos de diversão e comunhão.</p>
            <Image src="/images/comun.png" alt="Comunhão" width={200} height={200} />
          </div>
          <div className={styles.atividade}>
            <h3>Recreação</h3>
            <p>Atividades ao ar livre para relaxar e se divertir.</p>
            <Image src="/images/recrea.png" alt="Recreação" width={200} height={200} />
          </div>
        </div>
      </section>

      {/* Seção de Inscrição */}
      <section className={styles.inscricaoFinal}>
        <h2>Vai Ficar de Fora?</h2>
        <p>Se inscreva aqui e venha fazer parte desse evento incrível!</p>
        <a href="/escolha" className={styles.btn}>Inscreva-se Agora</a>
      </section>

      {/* Seção de Contato */}
      <section className={styles.contato} id="contato">
        <p>Contato</p>
        <p>Telefone: (11) 1234-5678</p>
        <a href="https://wa.me/551112345678" className={styles.btn2}>Fale Conosco no WhatsApp</a>
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Acampamento Cristão. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
