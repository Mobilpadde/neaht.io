const React = require("react");

module.exports = props => {
    const rnd = Math.floor(Math.random() * 1000000);

    const classes = "input " + (props.classes || "");

    const id = "input-" + rnd;
    const mId = "msg-" + rnd;
    const aId = "area-" + rnd;

    const ghost = e => {
        const msg = document.getElementById(mId);

        msg.innerText = e.target.value;
        e.target.style.height = msg.clientHeight + "px";
    };

    const focus = () => document.getElementById(aId).focus();

    return (
        <div id={id} className={classes}>
            <textarea id={aId} onChange={ghost}></textarea>
            <div id={mId} onClick={focus}></div>
        </div>
    );
};