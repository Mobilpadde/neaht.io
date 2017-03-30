const React = require("react");

module.exports = (props) => {
    return (
        <div className="message">
            <img src={props.data.avatar} width="25" />
            <span className="name">{props.data.name}</span>
            <span className="msg">{props.data.msg}</span>
        </div>
    );
};