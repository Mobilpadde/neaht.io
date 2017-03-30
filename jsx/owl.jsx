const React = require("react");

module.exports = (props) => {
    return (
        <div className="owl">
            <img src={props.owl.avatar} width="25" />
            <span>{props.owl.name}</span>
        </div>
    );
};