import React, { useState } from "react";

const Form = (props) => {
  const { onSubmitHandler, initialFirstName, initialLastName } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e, { firstName, lastName });
      }}
    >
      <p>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </p>
      <p>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default Form;
