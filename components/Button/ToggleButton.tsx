import * as React from "react"
import {
    CommonProps,
    commonPropTypes,
    handleProps,
    groupType
} from "./Button"
import {InputCommonProps} from "../Common/CommonPropsInterface"
import {ToggleButtonGroupContext} from "../Common/contexts"
import {
    classNames,
    chainFunction
} from "../utils"

export interface ToggleButtonProps extends InputCommonProps<HTMLInputElement>, CommonProps {
    type?: "checkbox" | "radio"
}

const ToggleButton = React.forwardRef(
    (
        {
            children,
            style = {
            },
            onFocus,
            onBlur,
            checked,
            type,
            defaultChecked,
            ...otherProps
        }: ToggleButtonProps,
        ref: React.Ref<HTMLInputElement>
    ) => {
        const {
            className,
            ...props
        } = handleProps(otherProps)
        const [focused, updateFocus] = React.useState(false)
        const handleBlur = () => updateFocus(false)
        const handleFocus = () => updateFocus(true)
        const classes = classNames(
            className,
            focused && "focus",
            (checked || defaultChecked) && "active"
        )
        const _onFocus = chainFunction(handleFocus, onFocus)
        const _onBlur = chainFunction(handleBlur, onBlur)

        if (props.disabled) {
            style.pointerEvents = "none"
            style.cursor = "default"
        }

        return (
            <ToggleButtonGroupContext.Consumer>
                {
                    ({
                        type: ctxType
                    }) =>
                        <label
                            style={style}
                            className={classes}>
                            <input
                                ref={ref}
                                type={type || ctxType}
                                onFocus={_onFocus}
                                onBlur={_onBlur}
                                {...props} />
                            {children}
                        </label>

                }
            </ToggleButtonGroupContext.Consumer>
        )
    }
)

ToggleButton.propTypes = {
    ...commonPropTypes,
    type: groupType as any
}
ToggleButton.defaultProps = {
    variant: "primary"
}
ToggleButton.displayName = "ToggleButton"

export default ToggleButton