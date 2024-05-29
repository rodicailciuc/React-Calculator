import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    return <div className="display">{value}</div>;
};
Display.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Display;
