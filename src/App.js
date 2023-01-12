import './App.css';
import ListaTareas from './componentes/ListaTareas';
import Subtitulo from './componentes/Subtitulo';


const App = () => {
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <Subtitulo />
      <ListaTareas />
    </div>
  );
}

export default App;
