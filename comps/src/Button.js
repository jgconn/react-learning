// props-types lib to check if incorrect kind of value (boolean), a warning will appear
// Typescript replaces this and more
import PropTypes from 'prop-types';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
 }) {
    return <button>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)
        
        if (count > 1) {
            return new Error('Only one of primary: primary, secondary, success, warning or danger can be true')
        };
    }
};

export default Button;