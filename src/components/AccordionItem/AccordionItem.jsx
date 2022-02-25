import React from "react";

export const AccordionItem = ({
    onClick,
    onKeyDown,
    isOpen,
    title,
    body,
}) => {
    return (
        <div className={"accordion__item"}>
            <div className="accordion__item__header" onClick={onClick} onKeyDown={onKeyDown} tabIndex={0}>{title}</div>
            <div className={`accordion__item__body ${isOpen ? "accordion__item__body--open" : "accordion__item__body--closed"}`}>{body}</div>
        </div>
    )
}