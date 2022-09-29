function Button(props) {
    console.log({props})
    return (
        <span onClick={props.onClick} className={props.val}>{props.children}</span>
    )
}

export default Button;
