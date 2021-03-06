import React from 'react'

function Button(props) {

    const classes = ['btn'];

    if(typeof props !== "undefined" && typeof props.type !== "undefined")
        classes.push("btn--" + props.type);
        console.log(props.type);

    return (
        <button className={classes.join(" ")} onClick={props.onButtonPress}>
            {props.children}
        </button>
    )
}

export default Button
