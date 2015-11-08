export function addItem (item) {
    return {
        type: 'ADD_ITEM',
        item: item
    }
}

export function completeItem(index) {
    return {
        type: 'COMPLETE_ITEM',
        index: index
    }
}

export function updateFilter(filterType) {
    return {
        type: 'UPDATE_FILTER',
        theFilter: filterType
    }
}
