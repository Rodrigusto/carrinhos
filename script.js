let carrinhoAtual = "Carrinho 01";
let diaAtual = "Segunda";

fetch('menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;
    atualizarEscala();
  });

function trocarCarrinho(carrinho) {
  carrinhoAtual = carrinho;
  atualizarEscala();
}

function trocarDia(dia) {
  diaAtual = dia;
  atualizarEscala();
}

function atualizarEscala() {
  const titulo = document.getElementById("titulo");
  const turnos = document.getElementById("turnos");
  const dados = escalas[carrinhoAtual]?.[diaAtual] || [];

  titulo.textContent = `${carrinhoAtual} – ${diaAtual}`;
  turnos.innerHTML = dados.map(turno => `
    <div class="turno">
      <span>${turno.hora}</span><br>
      <strong>${turno.dupla}</strong>
    </div>
  `).join('') || '<p>Sem escala cadastrada.</p>';
}
