import * as React from "react";
import {
    NavLink,
    withRouter,
    RouteComponentProps
} from "react-router-dom";
import routes from "../../routes";
import { Nav } from "reap-ui";

interface Props extends RouteComponentProps {
    onItemClick?: (evt: React.MouseEvent<HTMLElement>) => void;
}

function DocNav(props: Props) {
    const {
        onItemClick,
        history,
        location
    } = props;
    const handleClick = (path: string) => (evt: React.MouseEvent<HTMLElement>) => {
        onItemClick && onItemClick(evt);
        evt.preventDefault();

        if (location.pathname !== path) {
            history.push(path);
        }
    };
    return (
        <aside className="aside-nav">
            <Nav variant="pill" vertical>
                {
                    routes.map(
                        item => (
                            <Nav.Item key={item.path}>
                                <Nav.Link
                                    onClick={handleClick(item.path)}
                                    className="nav-link"
                                    active={location.pathname === item.path}
                                    href="#">
                                    {item.name}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    )
                }
            </Nav>
        </aside>
    );
}

export default withRouter(DocNav);