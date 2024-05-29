import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ value, name, onClick }) => {
    return (
        <button onClick={onClick} className={name}>
            {value}
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
export default Button;
