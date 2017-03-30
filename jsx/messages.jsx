const React = require("react");

const Message = require("./message.jsx");

module.exports = (props) => {
    return (
        <div id="messages">
            {props.messages.map(x => <Message data={x} />)}
        </div>
    );
};