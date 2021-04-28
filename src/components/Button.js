import PropTypes from 'prop-types'

const Button = ({color, test, onClick}) => {

    return <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{test}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button