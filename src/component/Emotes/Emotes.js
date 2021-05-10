import React from "react";
import Emote from "./Emote";

const Emotes = ({ posts, setPosts, setLoading, loading }) => {
  return (
    <main className="emote-main">
      <div className="emote-posts">
        <Emote
          posts={posts}
          loading={loading}
          setLoading={setLoading}
          setPosts={setPosts}
        />
      </div>
    </main>
  );
};

export default Emotes;
