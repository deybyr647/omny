import Link from "next/link";

import { Nav, Navbar } from "react-bootstrap";
import { FaSubway } from "react-icons/fa";

const Navigation = () => {
    return (
        <Navbar bg={"dark"} variant={"dark"} className={"sticky-top mb-3"}>
            <Link href={"/"}>
                <a>
                    <Navbar.Brand>
                        <FaSubway/>
                    </Navbar.Brand>
                </a>
            </Link>

            <Nav className={"ml-auto"}>
                <Link href={"/trace"}>
                    <a
                        className={"nav-link"}
                    >
                        Trace
                    </a>
                </Link>

                <Link href={"/about"}>
                    <a
                        className={"nav-link"}
                    >
                        About
                    </a>
                </Link>

                <Nav.Link
                    href={"https://omny.info"}
                    rel={"noopener noreferrer"}
                    target={"_blank"}
                >
                    OMNY
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;