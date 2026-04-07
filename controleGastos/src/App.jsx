import React, { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [gastos, setGastos] = useState([]);

  function adicionarGasto() {
    if (!nome || !valor) return;

    const novoGasto = {
      id: Date.now(),
      nome,
      valor: Number.parseFloat(valor),
    };

    setGastos([...gastos, novoGasto]);
    setNome("");
    setValor("");
  }

  function removerGasto(id) {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  }

  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Controle de Gastos Diário</h1>

      <input
        type="text"
        placeholder="Nome do gasto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button onClick={adicionarGasto}>Adicionar</button>

      <hr />

      <h2>Lista:</h2>

      {gastos.map((gasto) => (
        <div key={gasto.id}>
          {gasto.nome} - R$ {gasto.valor.toFixed(2)}
          <button onClick={() => removerGasto(gasto.id)}>X</button>
        </div>
      ))}

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
