import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Orch from "./Orch";
import OrchDetail from "./OrchDetail";
import Orchestrions from "./Orchestrions";
import Loading from "../Loading";

function Users({ loading, setLoading }) {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://ffxivcollect.com/api/orchestrions/")
      .then((res) => {
        setPosts(res.data.results);
        setLoading(true);
      })
      .catch((e) => {
        console.log("실패");
      });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/Orchestrions">
          <Orchestrions
            loading={loading}
            setLoading={setLoading}
            posts={posts}
            setPosts={setPosts}
          />
        </Route>
        <Route path="/Orchestrions/:id">
          <OrchDetail posts={posts} setPosts={setPosts} />
        </Route>
      </Switch>
    </>
  );
}

export default Users;
