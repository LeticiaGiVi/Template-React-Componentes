function Contato() {
  return (
      <div className="contato">
        <h2>Entre em Contato</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <br></br>
          <input type="email" placeholder="Email" />
          <br></br>
          <textarea placeholder="Mensagem"></textarea>
          <br></br>
          <button type="submit">Enviar</button>
        </form>
      </div>
  );
}
export default Contato;
