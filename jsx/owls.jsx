const React = require("react");

const Owl = require("./owl.jsx");

module.exports = (props) => {
    return (
        <div id="owls">
            {props.owls.map(x => <Owl owl={x} />)}
        </div>
    );
};