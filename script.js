const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

function calcularImposto (valorVenda, percentual) {
  return (valorVenda * percentual) / 100;
}

formulario.addEventListener('submit', function (event) {

  event.preventDefault();

  const valor_venda = parseFloat(document.getElementById('valor_venda').value);
  const itens = document.getElementById('itens').value;
  const irpf = parseFloat(document.getElementById('irpf').value);
  const pis = parseFloat(document.getElementById('pis').value);
  const cofins = parseFloat(document.getElementById('cofins').value);
  const inss = parseFloat(document.getElementById('inss').value);
  const issqn = parseFloat(document.getElementById('issqn').value);

  const valor_irpf = calcularImposto(valor_venda, irpf);
  const valor_pis = calcularImposto(valor_venda, pis);
  const valor_cofins = calcularImposto(valor_venda, cofins);
  const valor_inss = calcularImposto(valor_venda, inss);
  const valor_issqn = calcularImposto(valor_venda, issqn);

  resultado.innerHTML = `
    <h2>Nota Fiscal de Serviço</h2>
    <p><strong>Itens:</strong> ${itens}</p>
    <p><strong>Valor da Venda:</strong> R$ ${valor_venda.toFixed(2)}</p>
    <p><strong>IRPF:</strong> R$ ${valor_irpf.toFixed(2)} (${irpf}%)</p>
    <p><strong>PIS:</strong> R$ ${valor_pis.toFixed(2)} (${pis}%)</p>
    <p><strong>COFINS:</strong> R$ ${valor_cofins.toFixed(2)} (${cofins}%)</p>
    <p><strong>INSS:</strong> R$ ${valor_inss.toFixed(2)} (${inss}%)</p>
    <p><strong>ISSQN:</strong> R$ ${valor_issqn.toFixed(2)} (${issqn}%)</p>
    <p><strong>Total de impostos:</strong> R$ ${(valor_irpf + valor_pis + valor_cofins + valor_inss + valor_issqn).toFixed(2)}</p>
  `;

  formulario.reset();
});

