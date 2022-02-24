import React, { useEffect, useMemo, useState } from "react"

import { getBeers } from "../../API/index.js";
import { Accordion } from "../../components/Accordion"

export const Home = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getBeers().then(beers => {
            setBeers(beers.data);
        }).catch(() => {
            alert("An error occured, please refresh the page");
        })
    }, []);

    const beerAccordionItems = useMemo(() => beers.map(({ name, tagline, first_brewed }) => ({
        title: name,
        body: `
            Tagline: ${tagline} 
            First brewed: ${first_brewed}`
    })
    ), [beers]);

    return (
        <div>
            <h1>Punk IPA API</h1>
            <Accordion accordionItems={beerAccordionItems} />
        </div>
    )
}