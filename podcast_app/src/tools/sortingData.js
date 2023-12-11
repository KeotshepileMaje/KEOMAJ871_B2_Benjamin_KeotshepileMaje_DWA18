/**
 * Sorts and filters data based on various criteria.
 * @param {Array} preview - The array of data to be sorted and filtered.
 * @param {string} activeButton - The currently active sorting criteria.
 * @param {Object} [searchInput] - The search-related information (optional).
 * @param {Array} [searchResults] - The array containing search results (optional).
 * @returns {Array} - The sorted and/or filtered data array.
 */

export default function sortingData(preview, activeButton, searchInput, searchResults) {
    const defaultArrange = preview
    const arrangeA_Z = [...preview].sort((a, b) => a.title.localeCompare(b.title))
    const arrangeZ_A = [...preview].sort((a, b) => b.title.localeCompare(a.title))
    const ascendingOrder = [...preview].sort((a, b) => new Date(a.updated) - new Date(b.updated))
    const descendingOrder = [...preview].sort((a, b) => new Date(b.updated) - new Date(a.updated))

    if (searchInput && searchInput.search !== '') {
        return searchResults || []
    }

    if (activeButton === 'Default' ) {
        return defaultArrange
    }
    if (activeButton === 'A-Z' ) {
        return arrangeA_Z
    }
    if (activeButton === 'Z-A' ) {
        return arrangeZ_A
    }
    if (activeButton === 'Latest date' ) {
        return ascendingOrder
    }
    if (activeButton === 'Oldest date' ) {
        return descendingOrder
    }
}

//From fetchFavoriteEpi 

/*
    function sortingData() {
        const defaultArrange = favEpisode
        const arrangeA_Z = [...favEpisode].sort((a, b) => a.title.localeCompare(b.title))
        const arrangeZ_A = [...favEpisode].sort((a, b) => b.title.localeCompare(a.title))
        const ascendingOrder = [...favEpisode].sort((a, b) => new Date(a.updated) - new Date(b.updated))
        const descendingOrder = [...favEpisode].sort((a, b) => new Date(b.updated) - new Date(a.updated))

        if (activeButton === 'Default' ) {
            return defaultArrange
        }
        if (activeButton === 'A-Z' ) {
            return arrangeA_Z
        }
        if (activeButton === 'Z-A' ) {
            return arrangeZ_A
        }
        if (activeButton === 'Latest date' ) {
            return ascendingOrder
        }
        if (activeButton === 'Oldest date' ) {
            return descendingOrder
        }
    }
*/