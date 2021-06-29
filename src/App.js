import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckList from "./views/CheckList";
import GitSearch from "./views/GitSearch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={CheckList} />
        <Route exact path='/gitsearch' component={GitSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
