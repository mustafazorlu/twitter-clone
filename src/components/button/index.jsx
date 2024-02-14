/* eslint-disable react/prop-types */
import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

const Button = ({ size, children }) => {
    return createElement(
        "button",
        {
            className: classNames(
                "bg-[#1d9bf0] rounded-full flex items-center",
                {
                    "px-4": size === "normal",
                }
            ),
        },
        children
    );
};

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
    size: "normal",
};

export default Button;
