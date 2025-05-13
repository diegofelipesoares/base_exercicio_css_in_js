import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

function App() {
  const aoPesquisar = (termo: string) => {
    console.log('Termo pesquisado:', termo)
    // Aqui você pode fazer o filtro de vagas ou chamada de API
  }
  return (
    <>
      <Header />
      <Hero aoPesquisar={aoPesquisar} />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
