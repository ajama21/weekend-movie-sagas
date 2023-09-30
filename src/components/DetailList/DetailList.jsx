import React from "react";
import { useParams } from 'react-router-dom';

export default function DetailList() {
  const params = useParams();

  return <div className="details_page" >
    <div className="image">
      <img src="/images/toy-story.jpg" alt="" />
    </div>
    <div className="content">
      <h1>Gone Girl</h1>
      <p className="description">Commodo commodo ut dolor qui eu. Est id quis labore enim sit ut. Adipisicing ipsum labore non consequat. Minim ad in occaecat amet qui.</p>
      <p className="genres">Adventure, Fantasy, Comedy</p>
      <button>Back To Movie List</button>
    </div>
  </div>;
}
