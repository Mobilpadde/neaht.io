const React = require("react");

module.exports = (props) => {
    let classes = "button " + (props.classes || "");

    return <div className={classes}>{props.text}</div>;
};