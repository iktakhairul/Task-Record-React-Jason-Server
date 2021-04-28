import PropTypes from 'prop-types'
import Button from "./Button";
const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd}
                    color={showAdd ? 'red' : 'green'}
                    test={showAdd ? 'Close' : 'Add'} />
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