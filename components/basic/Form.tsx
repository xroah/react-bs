import * as React from "react";
import PropTypes from "prop-types";
import { classNames } from "../utils";
import FormItem from "./FormItem";
import { ColProps } from "./Col";
import { FormContext } from "../contexts";

export interface FormProps extends React.HTMLAttributes<HTMLElement> {
    inline?: boolean;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    horizontal?: boolean;
    labelAlign?: "left" | "right";
}

export default function Form(props: FormProps) {
    const {
        className,
        inline,
        labelCol,
        labelAlign,
        wrapperCol,
        horizontal,
        ...otherProps
    } = props;

    return (
        <FormContext.Provider value={{ 
            labelCol,
            wrapperCol,
            horizontal,
            labelAlign
         }}>
            <form
                className={
                    classNames(className, inline && "form-inline")
                } {...otherProps} />
        </FormContext.Provider>
    );
}

Form.propTypes = {
    inline: PropTypes.bool,
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    horizontal: PropTypes.bool,
    labelAlign: PropTypes.oneOf(["left", "right"])
};
Form.defaultProps = {
    inline: false,
    horizontal: false
};

Form.Item = FormItem;