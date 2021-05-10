import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Emotes from "./Emotes";
import EmoteDetail from "./EmotesDetail";

const EmotesIndex = ({ loading, setLoading }) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://ffxivcollect.com/api/emotes/")
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
      <h2 className="main-title">Emotes</h2>
      <Switch>
        <Route exact path="/Emotes">
          <Emotes
            loading={loading}
            setLoading={setLoading}
            posts={posts}
            setPosts={setPosts}
          />
        </Route>
        <Route path="/Emotes/:id">
          <EmoteDetail posts={posts} setPosts={setPosts} />
        </Route>
      </Switch>
    </>
  );
};

export default EmotesIndex;
