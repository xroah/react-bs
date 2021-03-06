import * as React from "react"
import {
    Dropdown, Row, Col 
} from "reap-ui"

export default () => {
    const overlay = (
        <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    )

    return (
        <>
            <Row>
                <Col className="mb-3">
                    <Dropdown.Button
                        placement="top"
                        variant="secondary"
                        overlay={overlay}>
                        Dropup
                    </Dropdown.Button>
                </Col>
                <Col className="mb-3">
                    <Dropdown.Button
                        split
                        placement="top"
                        variant="secondary"
                        overlay={overlay}>
                        Dropup split
                    </Dropdown.Button>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Dropdown.Button
                        placement="left"
                        variant="secondary"
                        overlay={overlay}>
                        Dropleft
                    </Dropdown.Button>
                </Col>
                <Col className="mb-3">
                    <Dropdown.Button
                        split
                        placement="left"
                        variant="secondary"
                        overlay={overlay}>
                        Dropleft split
                    </Dropdown.Button>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Dropdown.Button
                        placement="right"
                        variant="secondary"
                        overlay={overlay}>
                        Dropright
                    </Dropdown.Button>
                </Col>
                <Col className="mb-3">
                    <Dropdown.Button
                        split
                        placement="right"
                        variant="secondary"
                        overlay={overlay}>
                        Dropright split
                    </Dropdown.Button>
                </Col>
            </Row>
        </>
    )
}