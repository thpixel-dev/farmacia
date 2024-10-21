import React, { useState } from 'react';

function Body() {
 
  return (
    <>
      <div className="container">
        <h1>Gerenciamento de Filas</h1>

        <div className="fila">
          <h2>Fila Preferencial</h2>
          <ul>
            {filaPreferencial.map((senha, index) => (
              <li key={index}>Senha {senha.numero} - {senha.tipo}</li>
            ))}
          </ul>
          <button onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
        </div>

        <div className="fila">
          <h2>Fila Normal</h2>
          <ul>
            {filaNormal.map((senha, index) => (
              <li key={index}>Senha {senha.numero} - {senha.tipo}</li>
            ))}
          </ul>
          <button onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
        </div>

        <div className="atendimento">
          <button onClick={atender}>Atender Próximo</button>
        </div>
      </div>
    </>
  );
}

export default Body;