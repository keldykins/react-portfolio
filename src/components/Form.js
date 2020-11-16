import React from "react";
import "./Form.css";

function Form() {
  return (
    <form id="form" action="" method="GET">
      <div className="form-group">
        <label for="name">
          <p>name -</p>
        </label>
        <input id="name" type="name" required="true" className="form-control" />
      </div>
      <div className="form-group">
        <label for="email">
          <p>email -</p>
        </label>
        <input
          type="email"
          required="true"
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group">
        <label for="phone">
          <p>phone -</p>
        </label>
        <input
          type="phone"
          required="true"
          className="form-control"
          id="phone"
        />
      </div>
      <div className="form-group">
        <label for="message">
          <p>message -</p>
        </label>
        <input
          type="message"
          required="true"
          className="form-control"
          id="message"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        submit
      </button>
    </form>
  );
}

export default Form;
