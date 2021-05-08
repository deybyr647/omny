import { Card, ListGroup } from "react-bootstrap";

interface CardStatsProps {
    card: {
        balance: number | null
        lastStation: string | null
        lastUsed: string | null
    }
    id: string | null
}

const CardStats = ({card, id}: CardStatsProps) => {
    if(!card){
        return (
            <Card>
                <Card.Img variant={"top"} src={"https://webstockreview.net/images/credit-card-images-png-14.png"}/>
                <Card.Body>
                    <Card.Title>Card ID: Unknown</Card.Title>
                    <Card.Text>
                        An overview of your Metrocard...
                    </Card.Text>
                </Card.Body>

                <ListGroup className={"list-group-flush"}>
                    <ListGroup.Item>Balance: Unknown</ListGroup.Item>
                    <ListGroup.Item>Station of Last Use: Unknown</ListGroup.Item>
                    <ListGroup.Item>Time of Last Use: Unknown</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }

    return (
        <Card>
            <Card.Img variant={"top"} src={"https://webstockreview.net/images/credit-card-images-png-14.png"}/>
            <Card.Body>
                <Card.Title>Card ID: {id}</Card.Title>
                <Card.Text>
                    An overview of your Metrocard...
                </Card.Text>
            </Card.Body>

            <ListGroup className={"list-group-flush"}>
                <ListGroup.Item>Balance: ${card.balance}</ListGroup.Item>
                <ListGroup.Item>Station of Last Use: {card.lastStation}</ListGroup.Item>
                <ListGroup.Item>Time of Last Use: {card.lastUsed}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CardStats;