const Alert = (props) => {
    return (
        <div className={"alert " + props.classname} role="alert">
            {props.message}
        </div>
    )
}

export default Alert;