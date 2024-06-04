import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from '../components/Button.js'

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!!');
    }

    return (
        <div>
            <div>
                <Button primary className="mb-5" onClick={handleClick}><GoBell />Hi there!</Button>
            </div>
            <div>
                <Button secondary rounded onMouseEnter={handleClick}><GoCloudDownload />Hello there!!</Button>
            </div>
            <div>
                <Button success outline onMouseLeave={handleClick}>Click me!</Button>
            </div>
            <div>
                <Button warning>Buy Now!</Button>
            </div>
            <div>
                <Button danger rounded outline>Something!</Button>
            </div>
        </div>
    )
};

export default ButtonPage;