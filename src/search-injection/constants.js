// Constants

// Limit for the number of search results to be fetched
export const LIMIT = 3

// URL for Memex LOGO
export const MEMEX_LOGO_URL = browser.extension.getURL(
    'img/worldbrain-logo.png',
)

// regex - Regular Expression for the search url
// container - ID of the container to append elements

export const SEARCH_ENGINES = {
    google: {
        regex: /(http[s]?:\/\/)?(www.)?google[.\w]+\/search\?.*/,
        container: 'ires',
    },
}

// Gets the overview url of the extension
export const OVERVIEW_URL = chrome.extension.getURL('/overview/overview.html')

// Storage keys
export const HIDE_RESULTS_KEY = 'HIDE_MEMEX_RESULTS'
