import * as React from "react"
import {
    Col,
    Form,
    Row,
    Input,
    Checkbox,
    Button
} from "reap-ui"

export default () => {
    const [validated, updateValidated] = React.useState(false)
    const onSubmit = evt => {
        const form = evt.currentTarget

        if (!form.checkValidity()) {
            evt.preventDefault()
            evt.stopPropagation()
        }

        updateValidated(true)
    }

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}>
            <Row form>
                <Col md={{span: 4}} className="mb-3">
                    <Form.Item
                        control
                        label
                        labelText="First name"
                        htmlFor="validationCustom1"
                        validFeedback="Looks good!">
                        <Input required />
                    </Form.Item>
                </Col>
                <Col md={{span: 4}} className="mb-3">
                    <Form.Item
                        control
                        label
                        labelText="Last name"
                        htmlFor="validationCustom2"
                        validFeedback="Looks good!"
                        invalidFeedback="Required">
                        <Input required />
                    </Form.Item>
                </Col>
                <Col md={{span: 4}} className="mb-3">
                    <Form.Item
                        label
                        help="username"
                        labelText="Username"
                        htmlFor="validationCustom3"
                        invalidFeedback="Please choose a username.">
                        <Input prepend="@" required />
                    </Form.Item>
                </Col>
            </Row>
            <Row form>
                <Col md={{span: 6}} className="mb-3">
                    <Form.Item
                        control
                        label
                        labelText="City"
                        help="city"
                        htmlFor="validationCustom4"
                        invalidFeedback="Please provide a valid city">
                        <Input required />
                    </Form.Item>
                </Col>
                <Col md={{span: 3}} className="mb-3">
                    <Form.Item
                        label
                        labelText="State"
                        htmlFor="validationCustom5"
                        invalidFeedback="Please select a valid state">
                        <select defaultValue="" className="custom-select" required>
                            <option value="" disabled>Choose...</option>
                            <option>...</option>
                        </select>
                    </Form.Item>
                </Col>
                <Col md={{span: 3}} className="mb-3">
                    <Form.Item
                        control
                        label
                        labelText="zip"
                        htmlFor="validationCustom6"
                        invalidFeedback="Please provide a valid zip">
                        <Input required />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item invalidFeedback="You must agree before submitting.">
                <Checkbox id="invalidCheck" required>
                    Agree to terms and conditions
                </Checkbox>
            </Form.Item>
            <Button type="submit">Submit</Button>
        </Form>
    )
}