import React from "react";

class UserDetailsClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer called");
    }, 1000);
    console.log(
      "compoenent did mount: called only once hence the api call is done here"
    );
  }
  componentDidUpdate(currentVal, previousState) {
    console.log(
      "componentDidUpdate: when there is any change in the state variable, this is triggered",
      "comparision needs to be unde between previous data and new one"
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(
      "component will unmount is similar to ondestroy, called just before the screen is replaced."
    );
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default UserDetailsClass;
