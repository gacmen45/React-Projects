import classes from './Card.module.css'

const Card = props => {
const splitClass = `${classes.card} ${props.className}`

	return( <div className={splitClass}>
        {props.children}
        </div>)
}

export default Card
