import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return <Route {...route} key={index} />;
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
