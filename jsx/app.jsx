const React = require("react");
const ReactDOM = require("react-dom");

// TODO: Require routes

const Generator = require("./generator.jsx");
const Room = require("./room.jsx");

class App extends React.Component {
    static new() {
        const heaven = {
            title: "neaht",
        };

        const room = {
            id: -1,
            owls: [],
            messages: [],
        };

        return {
            heaven: heaven,
            room: room,
        };
    };

    constructor(props) {
        super(props);
        this.state = App.new();
    };
    /*
     <Generator heaven={this.state.heaven} />
     <Room data={this.state} />
    */

    render() {
        return (
            <div id="app">
                <Generator heaven={this.state.heaven} />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("root"));