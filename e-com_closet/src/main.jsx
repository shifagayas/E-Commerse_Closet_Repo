import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MainRouter from './Routes/MainRouter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/SCSS/Mediaquary.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </StrictMode>
);
