const React = require("react");

const Button = require("./button.jsx");

// TODO: Lazy-load for both my- and public-rooms, with probably about 10 rooms for each load

module.exports = (props) => {
    props; // Cheap fix to make it seem likes 'props' is used
    return (
        <div id="rooms">
            <Button text="Enter" classes="col-12" />
        </div>
    );
};