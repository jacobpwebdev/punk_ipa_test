import React, { useCallback, useState } from "react";

import { AccordionItem } from "../AccordionItem";

export const Accordion = ({
    allowMultipleAccordionOpen = true,
    canCloseAccordions = true,
    accordionItems,
}) => {
    const [openAccordions, setOpenAccordions] = useState([]);

    const accordionItemClicked = useCallback((index) => {
        const accordionIndex = openAccordions.indexOf(index);
        const accordionOpen = accordionIndex > -1;

        if (!canCloseAccordions && accordionOpen) {
            return;
        }

        if (!allowMultipleAccordionOpen) {
            setOpenAccordions(accordionOpen ? [] : [index]);
            return;
        }

        if (accordionOpen) {
            setOpenAccordions(openAccordions.splice(accordionIndex, 1));
            return;
        }

        setOpenAccordions([...openAccordions, index])



    }, [openAccordions, setOpenAccordions, allowMultipleAccordionOpen, canCloseAccordions]);

    return (
        <div>
            <div className="accordion__header">
                <div className="accordion__closeAll">

                </div>
            </div>
            {
                accordionItems?.map(({
                    title,
                    body
                }, index) => <AccordionItem key={title} title={title} body={body} onClick={() => accordionItemClicked(index)} isOpen={openAccordions[index]} />)
            }
        </div>
    )
}