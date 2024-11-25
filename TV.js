async function Usuarios() {
  const url = https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json
  const res = await fetch(url)
  const dados = await res.json()
  const Rede = Object.keys(dados)
  const Usuarios = Object.values(dados)
  const data = [
    {
  x: Redes,
  y: Usuarios,
  type:'bar'
}
]
const grafico = document.createElement ('div")
grafico.className = 'grafico'

document.getelementById('grafico-container').appendChild(grafico)
Plotly.newplot(grafico, data)

}

Usuarios()
