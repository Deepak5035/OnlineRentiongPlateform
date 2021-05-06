import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


import Link from "./components/Navigator/Navigator";
import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue";
import CatlogForm from "./components/Catalogue/CatlogForm";


const hist = createBrowserHistory();

function App() {

  var catlog=[]
  return (
    <div className="App">
     
      <Router history={hist}>
      <Link />
        <Switch>
          
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/catlogform" component={CatlogForm}/>
          
          
            <Redirect from="/" to="/catalogue" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
