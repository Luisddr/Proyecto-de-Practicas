import { ButtonSpinner } from './button-spinner.styles';
import './button.styles.scss'


const BUTTON_TYPE={
    google: 'google-sign-in',
    inverted: 'inverted'
}

function Button({children, buttonType, isLoading, ...otherProps}) {
    return (  
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE[buttonType]}`}
        {...otherProps}
        >
            {isLoading ? <ButtonSpinner/> : children }
        </button>
    );
}

export default Button;