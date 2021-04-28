import PropTypes from 'prop-types'
import Button from "./Button";
const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color='green' test='Add' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header