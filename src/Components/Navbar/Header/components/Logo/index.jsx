import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Image } from "./style";

import logo from "../../../../../assets/img/logo/logo.png";
import favicon from '../../../../../assets/img/logo/favicon.png'

const Logo = () => {

    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    const resizePage = () => {
        setPageWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resizePage)

        return () => {
            window.removeEventListener('resize', resizePage)
        }
    }, [pageWidth])

    return (
        <Wrapper>
            <Link to="/">
                {
                    pageWidth > 1100 ?
                        <Image src={logo} alt="logo" /> :
                        <Image src={favicon} alt="logo" />
                }
            </Link>
        </Wrapper>
    )
}

export default Logo