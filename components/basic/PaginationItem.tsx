import * as React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils";

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
    active?: boolean;
    disabled?: boolean;
}

export default function PaginationItem(props: ItemProps) {
    const {
        className,
        children,
        active,
        disabled,
        onClick,
        ...otherProps
    } = props;
    const handleClick = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
        onClick && onClick(evt);
        evt.preventDefault();
    };

    return (
        <li className={
            classNames(
                className,
                "page-item",
                active && "active",
                disabled && "disabled"
            )
        } {...otherProps}>
            <a 
            href="#" 
            className="page-link"
            tabIndex={disabled ? -1 : undefined}
            onClick={handleClick}>{children}</a>
        </li>
    );
}

PaginationItem.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool
};
PaginationItem.defaultProps = {
    active: false,
    disabled: false
};