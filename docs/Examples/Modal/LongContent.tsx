import * as React from "react"
import {
    Modal, Button 
} from "reap-ui"
import content from "./content"

export default () => {
    const [visible, setVisible] = React.useState(false)
    const toggle = () => setVisible(!visible)

    return (
        <>
            <Button onClick={toggle}>Launch demo modal</Button>
            <Modal
                visible={visible}
                title="Modal title"
                onCancel={toggle}>
                {content}
            </Modal>
        </>
    )
}