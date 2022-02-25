import React from "react";

import { Accordion } from "../../components/Accordion";
import { CTAGrid } from "../../components/CTA_Grid";

import { useHome } from "./useHome";

export const Home = () => {
    const {
        beerAccordionItems,
        beerGridItems
    } = useHome();

    return (
        <div>
            <h1 className="pageHeader">Punk IPA API Consumer App<div className="pageHeader__author">By Jacob Poole</div></h1>
            <CTAGrid
                gridItems={beerGridItems}
                fieldsToFilterOn={["name", "ingredients", "description"]}
            />
            <Accordion accordionItems={beerAccordionItems} />
        </div>
    )
}