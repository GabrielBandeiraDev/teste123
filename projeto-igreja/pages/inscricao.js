import Link from 'next/link';
import { useState } from "react";

const InscricaoForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [evento, setEvento] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = { nome, email, telefone, evento };

        // Here you would send the form data to your server (e.g., API route)
        console.log(formData);
    };

    return (
        <div>
            <header>
                <div className="barra-superior">
                    <h2>IBCD Jovens</h2>
                </div>
            </header>

            <form onSubmit={handleSubmit}>
                <section id="formulario">
                    <h2>Inscrição no Acampamento</h2>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />

                    <label htmlFor="evento">Supervisão:</label>
                    <select
                        id="evento"
                        name="evento"
                        value={evento}
                        onChange={(e) => setEvento(e.target.value)}
                        required
                    >
                        <option value="Roberto">Roberto</option>
                        <option value="Alexandre">Alexandre</option>
                        <option value="Hector">Hector</option>
                        <option value="Cláudia">Cláudia</option>
                        <option value="Aline">Aline</option>
                        <option value="Yasmin">Yasmin</option>
                    </select>
                    
                    <Link href="/pagamento" passHref>
                        <button type="submit" className="btn">Inscrever-se</button>
                    </Link>
                </section>
            </form>

            <div className="barra-inferior">
                <p>&copy; 2024 IBCD Jovens | Todos os direitos reservados</p>
            </div>
        </div>
    );
};

export default InscricaoForm;
