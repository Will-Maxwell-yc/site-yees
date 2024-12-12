import { Link } from "react-router-dom";

import { Wrapper, Image } from "./style";

const Logo = ({ image }) => {
    return (
        <Wrapper>
            <Link to="/">
                <Image src={image} alt="logo" />
            </Link>
        </Wrapper>
    )
}

export default Logo