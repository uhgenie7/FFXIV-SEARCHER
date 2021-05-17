import React, { useState, lazy, Suspense } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
// import Router
import Home from "./routes/Home";
import Emotes from "./routes/Emotes";
import Emote from "./routes/Emote";
import Orchestrions from "./routes/Orchestrions";
import Orchestrion from "./routes/Orchestrion";
import Another from "./routes/Another";
// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import Alert from "./component/Alert";
import NotFound from "./routes/NotFound";
//import img
import Loading from "./component/Loading";
let Character = lazy(() => {
  return import("./component/Character.js");
});
function App() {
  let [loading, setLoading] = useState(null);
  let [alert, setAlert] = useState(false);
  let [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        {alert === false ? <Alert setAlert={setAlert} /> : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character">
            <Suspense
              fallback={
                <main>
                  <Loading />
                </main>
              }
            >
              <Character />
            </Suspense>
          </Route>
          <Route
            exact
            path="/emotes"
            render={() => (
              <Emotes
                loading={loading}
                setLoading={setLoading}
                posts={posts}
                setPosts={setPosts}
              />
            )}
          />
          <Route
            path="/emotes/:id"
            render={(props) => (
              <Emote posts={posts} setPosts={setPosts} {...props} />
            )}
          />
          <Route
            exact
            path="/orchestrions"
            render={() => (
              <Orchestrions
                loading={loading}
                setLoading={setLoading}
                posts={posts}
                setPosts={setPosts}
              />
            )}
          />
          <Route
            exact
            path="/orchestrions/:id"
            render={(props) => (
              <Orchestrion posts={posts} setPosts={setPosts} {...props} />
            )}
          />
          <Route path="/another" component={Another} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
