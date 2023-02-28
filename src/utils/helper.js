export function filterdata(allRestaurants, searchText) {
    // this will return the filtered data.
    const filterData = allRestaurants.filter((element) => {
        return element?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    return filterData;
}

