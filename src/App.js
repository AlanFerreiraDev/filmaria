import './styles.css';
import Routes from './routes';
//* Importo o toastify aqui, pois tudo vai passar pelo App para ser renderizado, e precisamos que o toastify seja visivel em todo o App, para eu utilizar em qualquer pagina ...
import { ToastContainer } from 'react-toastify';
//* Precisamos importar o css padrão do toastify
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoclose={3000}/>
    </div>
  );
}

