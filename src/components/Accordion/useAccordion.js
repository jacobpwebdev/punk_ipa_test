import { useCallback, useState } from "react";

export const useAccordion = ({
    allowMultipleAccordionOpen = true,
    canCloseAccordions = true,
}) => {
    const [openAccordions, setOpenAccordions] = useState([]);

    const closeAllAccordions = useCallback(() => {
        setOpenAccordions([]);
    }, [setOpenAccordions]);

    const closeOrOpenAccordion = useCallback((index) => {
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
            const openAccordionsClone = [...openAccordions];
            openAccordionsClone.splice(accordionIndex, 1)
            setOpenAccordions(openAccordionsClone);
            return;
        }

        setOpenAccordions([...openAccordions, index])

    }, [openAccordions, setOpenAccordions, allowMultipleAccordionOpen, canCloseAccordions]);

    const closeAllOnKeydown = useCallback((evt) => {
        switch (evt.keyCode) {
            case 13:
                closeAllAccordions();
                break;
        }
    }, [closeAllAccordions]);

    const accordionItemClicked = useCallback((index) => {
        closeOrOpenAccordion(index)
    }, [closeOrOpenAccordion]);

    const accordionItemKeyDown = useCallback((evt, index) => {
        switch (evt.keyCode) {
            case 13:
                closeOrOpenAccordion(index);
                break;
        }
    }, [closeOrOpenAccordion])

    return {
        closeAllOnClick: closeAllAccordions,
        openAccordions,
        accordionItemClicked,
        accordionItemKeyDown,
        closeAllOnKeydown,
    }
}