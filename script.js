var Counter = React.createClass({
  getDefaultProps() {
    console.log("Domyślna wartość propsów.");
  },

  getInitialState: function() {
    console.log("Stan początkowy komponentu.");
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  reset: function() {
    this.setState({
      counter: 0
    });
  },

  componentWillMount: function() {
    console.log("Komponent będzie zamontowany.");
  },
  componentDidMount: function() {
    console.log("Komponent zamontowany.");
  },
  componentWillReceiveProps: function() {
    console.log("Komponent odbiera nowe i aktualizuje atrybuty i stany");
  },
  shouldComponentUpdate: function() {
    console.log("Czy atrybut lub komponent wymaga aktualizacji?");
    return true;
  },
  componentWillUpdate: function() {
    console.log(
      "Komponent będzie aktualizowany jeżeli shouldComponentUpdate zwróci true."
    );
  },
  componentDidUpdate: function() {
    console.log("Komponent zaktualizowany. Można wprowadzać zmiany w DOM.");
  },
  componentWillUnmount: function() {
    console.log("Odmontowanie komponentu, usunięcie z DOM.");
  },

  render: function() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "counter" },
        React.createElement(
          "button",
          { className: "btn decrement", onClick: this.decrement },
          "Decrement - "
        ),
        React.createElement("p", { className: "result" }, this.state.counter),
        React.createElement(
          "button",
          { className: "btn increment", onClick: this.increment },
          "Increment + "
        )
      ),
      React.createElement(
        "button",
        { className: "btn btn-reset", onClick: this.reset },
        "Reset"
      )
    );
  }
});

var element = React.createElement(
  "div",
  {},
  React.createElement(Counter, {}),
  React.createElement(Counter, {}),
  React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById("app"));
