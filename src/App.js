import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueListPage from "./pages/IssueListPage";
import "./styles/main.scss";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={IssueListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
