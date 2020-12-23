import Main from './components/Main';
import Details from './components/Details'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App () {

  
      return (
        
        <div className='App'>
          <BrowserRouter>
           <Switch>
                    <Route exact path = '/' component = {Main} />
                    <Route path = '/details/:movieId' component={Details}/>
            </Switch>
          </BrowserRouter>
        </div>
        
      );
    
}

export default App;
