import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NotFound from "@pages/NotFound";
import About from "@pages/About";
import Components from "@pages/Components";
import Works from "@pages/Works";
import Home from "@pages/Home";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/components" component={Components} />
          <Route path="/works" component={Works} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
