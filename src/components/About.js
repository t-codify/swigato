import UserDetailsClass from "./ClassComponent";
import UserDetailsFunction from "./FunctionalComponent";
import WebSocketComponent from "./WebSocketComponent";

const About = () => {
  return (
    <div>
      {/* <h1>About Us</h1>
      <h2>This is About Us screen!</h2>
      <UserDetailsClass name="TanviClass" />
      <UserDetailsFunction name="Tanvi " />
       */}
      <WebSocketComponent />
    </div>
  );
};

export default About;
