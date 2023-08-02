import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header , MaiContent, Footer , Img} from './Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <MaiContent/>
  <Img/>
  <Footer/>
 
  </React.StrictMode>,
)
