import React, { useCallback } from "react";

export const AccordionItem = ({
    onClick,
    isOpen,
    title,
    body,
}) => {
    return (
        <div className={`accordion__item ${isOpen ? "accordion__item--open" : "accordion__item--closed"}`}>
            <div className="accordion__item__header" onClick={onClick}>{title}</div>
            <div className="accordion__item__body">{body}</div>
        </div>
    )
}