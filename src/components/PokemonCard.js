import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name,hp,front,back}) {
  const [isFront,setIsFront] = useState(true)

  function toggleCard(){
      setIsFront(preVal => !preVal)
      ///(!isFront)
  }

  return (
    <Card onClick={toggleCard}>
      <div>
        <div className="image">
          <img alt="oh no!" src= {isFront ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
