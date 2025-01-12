import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { dutyState } from './features/menustate.js';
import { formState } from './features/formvisible.js';

 const store=configureStore({
  reducer:{
    duty:dutyState.reducer,
    form:formState.reducer,
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App /> 
    </Provider>
   
  </StrictMode>,
)
