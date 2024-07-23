import { useState } from "react";

const UserDetailsFunction = (props) => {
  const [count] = useState(0);
  const { name } = props;
  return (
    <div>
      <h1>count:{count}</h1>
      <p>name:{name}</p>
    </div>
  );
};

export default UserDetailsFunction;
