async function Usuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const Rede = Object.keys(dados)
  const Usuarios = Object.values(dados)
  const data = [
    {
  x: Rede,
  y: Usuarios,
  type:'bar'
}
]
const grafico = document.createElement ('div')
grafico.className = 'grafico'

document.getElementById('grafico-container').appendChild(grafico)
Plotly.newPlot(grafico, data)

}

Usuarios()
