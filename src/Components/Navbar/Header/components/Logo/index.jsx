import { Link } from "react-router-dom";

import { Wrapper, Image } from "./style";

const Logo = ({ image }) => {
    return (
        <Wrapper className="main__logo">
            <Link to="/" className="logo">
                <Image src={image} alt="logo" />
            </Link>
        </Wrapper>
    )
}

export default Logo