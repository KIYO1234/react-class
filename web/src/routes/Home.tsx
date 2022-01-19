import React, { Component } from "react";

export type Props = {
  title: string;
};

class Home extends Component<Props, { isToggleOn: boolean }> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    console.log(this.state.isToggleOn);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log(this.state);
    const bool = this.state.isToggleOn;

    return (
      <>
        <div>Home画面</div>
        <div>{this.props.title}</div>
        <div>{bool}</div>
        <button onClick={this.handleClick}>クリック</button>
      </>
    );
  }
}

export default Home;
