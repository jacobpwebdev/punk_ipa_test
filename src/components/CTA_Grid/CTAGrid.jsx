import React from "react";

import { useCTAGrid } from "./useCTAGrid";

export const CTAGrid = (props) => {
    const {
        items,
        onFilterInputChange,
        filterValue,
        onSortDirectionChange,
        sortDirection,
    } = useCTAGrid(props);

    return (
        <div className="ctaGrid">
            <div className="ctaGrid__header">
                <input onChange={onFilterInputChange} value={filterValue} placeholder="Filter results" />
                <div className="ctaGrid__sortWrapper">
                    <button 
                        className={`ctaGrid__sort ${sortDirection === "asc" ? "ctaGrid__sort--active" : ""}`}
                        onClick={() => onSortDirectionChange("asc")}
                    >
                        Ascending
                    </button>
                    <button 
                        className={`ctaGrid__sort ${sortDirection === "desc" ? "ctaGrid__sort--active" : ""}`}
                        onClick={() => onSortDirectionChange("desc")}
                    >
                        Descending
                    </button>
                </div>
            </div>
            <div className="ctaGrid__items">
                {
                    items.map(({
                        name, description, ingredients, image_url, abv
                    }) => (
                        <div className="ctaGrid__items__item" title={ingredients} key={name}>
                            <div className="ctaGrid__items__item__content">
                                <div className="ctaGrid__items__item__image">
                                    <img src={image_url} title={description} alt={name} />
                                </div>
                            </div>
                            <div className="ctaGrid__items__item__header">
                                <div>{name}</div>
                                <div class="ctaGrid__items__item__abv">
                                    {abv}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}