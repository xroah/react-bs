import * as React from "react"
import {
    Card,
    Row,
    Col
} from "reap-ui"
import img from "../../assets/image_cap.svg"

export default () => (
    <Row cols={{
        default: 1,
        md: 2
    }}>
        <Col className="mb-4">
            <Card className="h-100">
                <Card.Image src={img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className="mb-4">
            <Card className="h-100">
                <Card.Image src={img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className="mb-4">
            <Card className="h-100">
                <Card.Image src={img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className="mb-4">
            <Card className="h-100">
                <Card.Image src={img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
)