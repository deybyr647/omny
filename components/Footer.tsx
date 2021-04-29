import { Nav } from "react-bootstrap";

const Footer = () => {
    return (
        <Nav className={"sticky-bottom justify-content-center bg-dark mt-3"}>
            <Nav.Link href={"https://deybyr647.com"} target={"_blank"} rel={"noopener noreferrer"} className={"text-white"}>
                &copy; 2020 | Deyby Rodriguez
            </Nav.Link>
        </Nav>
    )
}

export default Footer;