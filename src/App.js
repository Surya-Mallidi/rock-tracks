import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TrackList from "./containers/TrackList";
import TrackDetails from "./containers/TrackDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Rock Tracks</h1>
        <Switch>
          <Route exact path="/" component={TrackList} />
          <Route path="/trackDetails" component={TrackDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
