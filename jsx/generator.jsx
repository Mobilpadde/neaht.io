const React = require("react");

const Sky = require("./sky.jsx");
const Button = require("./button.jsx");

module.exports = (props) => {
    return (
        <div id="generator">
            <Sky heaven={props.heaven} />
            <Button text="Generate my room" />
            <br />
            <Button text="Sign in with Twitter" classes="bird" />
            <br />
            <div>
                <Button text="Public rooms" classes="fifty" />
                <Button text="My rooms" classes="fifty" />
            </div>
        </div>
    );
}