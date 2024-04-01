function Main(){
    return(
        
        <main>
            <div className="apresentacao">
                <h2>informações pessoais</h2>
                <ul>
                    <li>Nome: Joao</li>
                    <li>Email: joao@example.com</li>
                    <li>Telefone: (00) 12345-6789</li>
            </ul>
            </div>
            <div className="habilidades">
                <h2>Habilidades</h2>
                <div className="habilidade">
                    <h3>HTML</h3>
                    <p>Nível: Avançado</p>
                </div>
                <div className="habilidade">
                    <h3>CSS</h3>
                    <p>Nível: Intermediario</p>
                </div>
                <div className="habilidade">
                    <h3>Java Script</h3>
                    <p>Nível: Básico</p>
                </div>
            </div>
        </main>
    )
}

export default Main