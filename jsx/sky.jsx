const React = require("react");

module.exports = (props) => {
    return (
        <div className="col-12 heaven">
            <div className="stars"></div>
            <div className="stars medium"></div>
            <div className="stars big"></div>
            <h1>{props.heaven.title}</h1>
        </div>
    );
};