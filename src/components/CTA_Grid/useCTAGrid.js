import { useCallback, useEffect, useMemo, useState } from "react";

export const useCTAGrid = ({
    gridItems,
    fieldsToFilterOn,
}) => {
    const [filteredItems, setFilteredItems] = useState(gridItems);
    const [filterValue, setFilterValue] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");

    const setFilteredItemsFromString = useCallback((filterString) => {
        if (filterString === "") {
            setFilteredItems(gridItems);
            return;
        }
        // iterate over supplied array of keys, checking each beer item for a match on the text the user typed
        const filtered = gridItems.filter((item) => fieldsToFilterOn.some(fieldToTest => {
            return item[fieldToTest].toLowerCase().indexOf(filterString.toLowerCase()) > -1;
        })
        );

        setFilteredItems(filtered);
    }, [setFilteredItems, gridItems, fieldsToFilterOn])

    const onFilterInputChange = useCallback((evt) => {
        setFilterValue(evt.target.value);
        setFilteredItemsFromString(evt.target.value)
    }, [setFilterValue, setFilteredItemsFromString]);

    useEffect(() => {
        setFilteredItems(gridItems);
    }, [gridItems, setFilteredItems]);

    const onSortDirectionChange = useCallback((newSortDirection) => {
        setSortDirection(newSortDirection);
    }, [setSortDirection]);

    // sort items after filtering them
    const sortedItems = useMemo(() => filteredItems.sort(
        (next, prev) => sortDirection === "asc" 
            ? next.abv - prev.abv 
            : prev.abv - next.abv
        ), 
    [filteredItems, sortDirection]);

    return {
        items: sortedItems,
        onFilterInputChange,
        filterValue,
        onSortDirectionChange,
        sortDirection,
    };
}