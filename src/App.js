import './App.css'

import logo from './assets/logo.png'

function App() {
  const cardapio = {
    comidas: [
      {
        nome: 'Menos é mais: bife do vazio e creme de milho',
        valor: 28,
      },
      {
        nome: 'Barrinha Energetica: bacon defumado com molho do dia',
        valor: 10,
      },
      {
        nome: 'Tortilhas Recheadas com pulled pork: tortilhas de fubá, pulled pork e bbq de abacaxi',
        valor: 20,
      },
    ],
    bebidas: [
      {
        nome: 'Agua sem gás',
        valor: 4,
      },
      {
        nome: 'Agua com gás',
        valor: 4,
      },
      {
        nome: 'Refrigerante lata',
        valor: 4,
      },
      {
        nome: 'Chopp',
        valor: 5,
      },
      {
        nome: 'Control + Alt + del',
        valor: 10,
      },
      {
        nome: 'Copo de mé',
        valor: 5,
      },
      {
        nome: 'Refil Mé (Com o Copo) ',
        valor: 3,
      },
    ],
  }

  return (
    <div className='App'>
      <main>
        <img src={logo} alt='logo' />

        <div className='cardapio'>
          <div className='section'>
            <h4>comidas</h4>

            {cardapio.comidas.map((comida) => (
              <div className='item'>
                <h1>{comida.nome}</h1>
                <h5>
                  {comida.valor.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h5>
              </div>
            ))}
          </div>

          <div className='section'>
            <h4>bebidas</h4>

            {cardapio.bebidas.map((bebida) => (
              <div className='item'>
                <h1>{bebida.nome}</h1>
                <h5>
                  {bebida.valor.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
