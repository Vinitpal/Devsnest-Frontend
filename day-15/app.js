"use strict";

const e = React.createElement;

class Sidd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return "SAIKYOO";
    }

    return e(
      "button",
      { onClick: () => this.setState({ clicked: true }) },
      "click me"
    );
  }
}

ReactDOM.render(e(Sidd), document.getElementById("root"));
