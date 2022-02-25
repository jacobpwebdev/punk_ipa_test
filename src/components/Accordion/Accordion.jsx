import React from "react";

import { AccordionItem } from "../AccordionItem";
import { useAccordion } from "./useAccordion";

export const Accordion = ({
    accordionItems,
    ...props
}) => {
    const {
        closeAllOnClick,
        closeAllOnKeydown,
        openAccordions,
        accordionItemClicked,
        accordionItemKeyDown
    } = useAccordion(props);

    return (
        <div className="accordion">
            <div className="accordion__header">
                Select a fine brew from the list to learn more about it
                {
                    !!openAccordions.length && 
                    <div 
                        className="accordion__closeAll" 
                        onClick={closeAllOnClick}
                        onKeyDown={closeAllOnKeydown}
                        tabIndex={0} 
                        title="Close all"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                }
            </div>
            {
                accordionItems?.map(({
                    title,
                    body
                }, index) => (
                    <AccordionItem
                        key={title}
                        title={title}
                        body={body}
                        onClick={() => accordionItemClicked(index)}
                        onKeyDown={(evt) => accordionItemKeyDown(evt, index)}
                        isOpen={openAccordions.indexOf(index) > -1}
                    />
                ))
            }
        </div>
    )
}