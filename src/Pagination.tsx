import * as React from "react";
import PropTypes from "prop-types";
import { classNames } from "./utils";
import PaginationItem from "./PaginationItem";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    size?: "lg" | "sm";
    alignment?: "center" | "right";
}

export default function Pagination(props: PaginationProps) {
    const {
        className,
        size,
        alignment,
        ...otherProps
    } = props;
    const PREFIX = "pagination";
    const alignmentMap: any = {
        center: "justify-content-center",
        right: "justify-content-end"
    };

    return (
        <ul className={
            classNames(
                PREFIX,
                size && `${PREFIX}-${size}`,
                alignment && alignmentMap[alignment]
            )
        } {...otherProps} />
    );
}

Pagination.propTypes = {
    size: PropTypes.oneOf(["lg", "sm"]),
    alignment: PropTypes.oneOf(["center", "right"])
};

Pagination.Item = PaginationItem;