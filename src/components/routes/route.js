import { BrowserRouter, Route } from 'react-router-dom';
import Footer from '../Common/footer';
import Header from '../Common/header';
import { views } from './views';

const MyRoutes = () => {
    const Paths = Object.keys(views)
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        {/*<Navegation/>*/}
        {/* El siguiente código renderiza los componentes*/}
        {
          Paths.map( path => { 
            return (
              <Route
                key = {path}
                path = {path}
                component = {views[path]['view']}
                exact
              /> 
        )})}
        <Footer/>
      </BrowserRouter>    
  )}
  
  export default MyRoutes