import { HelmetProvider } from "react-helmet-async";

import NotFound from "@pages/NotFound";
import About from "@pages/About";
import Components from "@pages/Components";
import Works from "@pages/Works";
import Home from "@pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home}></Route>
          <Route path={"/works"} component={Works}></Route>
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
