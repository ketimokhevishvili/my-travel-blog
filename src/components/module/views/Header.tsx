import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className='logo'><FontAwesomeIcon icon={faEarthAmericas} /> </div>
            <h1 className='title'> My Travel Blog</h1>
        </div>
    )
}

export default Header
