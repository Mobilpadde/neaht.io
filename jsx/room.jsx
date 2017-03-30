const React = require("react");

const Sky = require("./sky.jsx");
const Owls = require("./owls.jsx");
const Chat = require("./chat.jsx");

module.exports = (props) => {
    return (
        <div id="room" data-id={props.data.room.id}>
            <Sky heaven={props.data.heaven} />
            <Owls owls={props.data.room.owls} />
            <Chat classes="col-12" messages={props.data.room.messages} />
        </div>
    );
}