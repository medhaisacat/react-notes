import './WelcomeCard.css'

function WelcomeCard(props) {
    return (
        <h1 className="WelcomeCard">{props.children}</h1>
    )
}

export default WelcomeCard;