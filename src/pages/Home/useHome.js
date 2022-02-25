import { useEffect, useMemo, useState } from "react";

import { getBeers } from "../../API/index.js";

export const useHome = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getBeers().then(beers => {
            setBeers(beers.data);
        }).catch(() => {
            alert("An error occured, please refresh the page.");
        })
    }, []);

    const beerAccordionItems = useMemo(() => beers.map(({ name, tagline, first_brewed }) => ({
        title: name,
        body: `
            Tagline: ${tagline} 
            First brewed: ${first_brewed}`
    })
    ), [beers]);

    const beerGridItems = useMemo(() => beers.map(({ name, description, ingredients, food_pairing, image_url, abv }) => {
        const ingredientsFlat = [
            ...ingredients.hops.flatMap(hop => {
                return [hop.attribute, hop.name];
            }),
            ...ingredients.malt.flatMap(maltItem => {
                return [maltItem.name];
            }),
            ingredients.yeast
        ].join(" ");

        return {
            name, description, ingredients: ingredientsFlat, food_pairing, image_url, abv
        }

    }), [beers])

    return {
        beerAccordionItems,
        beerGridItems,
    }
}