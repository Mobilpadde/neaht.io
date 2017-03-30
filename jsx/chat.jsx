const React = require("react");

const Messages = require("./messages.jsx");
const Input= require("./input.jsx");

// TODO: Show room info above messages
module.exports = (props) => {
    return (
        <div id="chat">
            <Messages messages={props.messages} />
            <Input id="msg-input" classes="col-11 no-margin" />
        </div>
    );
};