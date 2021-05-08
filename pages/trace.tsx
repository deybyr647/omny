import { SyntheticEvent, useEffect, useState } from "react";

import { Container, Row, Col, Jumbotron, Image, Form, Button } from "react-bootstrap";
import { BiAnalyse } from "react-icons/bi";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import CardStats from "../components/CardStats";
import fire from "../config/firebase-config";

const TracerContent = () => {
    const [id, setID] = useState("");
    const [card, setCard] = useState(null);

    const changeHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        //@ts-ignore
        setID(e.target.value);
    }

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        let cardRef = fire.firestore().collection("cards").doc(id);

        cardRef.get()
            .then(doc => {
                if(doc.exists){
                    console.log(doc, doc.data());
                    setCard(doc.data());
                } else {
                    console.log("No record found");
                    setCard(null);
                }
            })

        /*fire.firestore()
            .collection("cards")
            .add({
                cardNumber: id
            })
            .then(ref => {
                console.log(ref);
                console.log("Added document!");
            })
            .catch(err => {
                console.log(err);
            })*/
    }

    /*useEffect(() => {
        fire.firestore()
            .collection("cards")
            .onSnapshot(snap => {
                const cardArr = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setCards(cardArr);

                console.log("Read database!");
            })
    }, []);*/

    useEffect(() => {
        console.log("Refreshed Card!");
    }, [card]);

    return (
        <Container>
            <Row className={"d-flex flex-column"}>
                <Col>
                    <Jumbotron className={"d-flex align-items-center flex-column m-0"}>
                        <Image src={"https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/MetroCard.SVG/1200px-MetroCard.SVG.png"} alt={"MetroCard"} className={"w-50"} rounded/>
                        <h3 className={"text-center mt-3"}>Enter your MetroCard's ID number below to begin...</h3>
                    </Jumbotron>
                </Col>

                <Col>
                    <Form className={"d-flex flex-row justify-content-between"} onSubmit={submitHandler}>
                        <Form.Control required placeholder={"Enter MetroCard ID Number here..."} value={id} onChange={changeHandler}/>
                        <Button type={"submit"}><BiAnalyse/></Button>
                    </Form>
                </Col>
            </Row>

            <Row className={"justify-content-center mt-3"}>
                <Col md={6}>
                    <Jumbotron>
                        <CardStats card={card} id={id}/>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

const TracerPage = () => (
    <>
        <Navigation/>
        <TracerContent/>
        <Footer/>
    </>
)

export default TracerPage;