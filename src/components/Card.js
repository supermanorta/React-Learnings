import './Card.css';


// Componet functions as a div with a visual already set up for it.
function Card( props ){
    const classes = 'card '+ props.className; // here we seta defult className and if the props 
    // passed in have more classes names we can pass those in now to the div.
    return (
    <div className={classes}>{props.children}</div>);
}

export default Card;