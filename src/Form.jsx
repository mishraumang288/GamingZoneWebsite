import React from "react";




function Form(props) {
  return (
    <div>
      <label for="" class="form-label">
        {props.label}
      </label>
    
      <input
        type={props.type}
        class="form-control"
        id="exampleFormControlInput1"
        placeholder={props.placeholder}
      />
    
    </div>
  );
}

export default Form;