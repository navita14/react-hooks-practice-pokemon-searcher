import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokemon}) {
  const [formData,setFormData] = useState({
    "name": ""
    "hp": ""
    "sprites": {
      "front": ""
      "back": ""cod
    }
  })

  function handleChange(event){
    if(event.target.name === "frontUrl"){
      setFormData(prev => {
        return {...prev,[event.target.name]:event.target.value}
      })
    } else if {

    }else

    // setFormData(prev => {
    //   return {...prev,[event.target.name]:event.target.value}
    // })
  }

  function handleSubmit(event){
    event.preventDefault()
    
    fetch("http://localhost:3001/pokemon")
    'method':'POST'
  },[])


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input 
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
