export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Remove after the development
    // token: 'BQDcDlp0-T6-dJ5iJ7FLuzZl1V3funMOX4_1LRhdKm10AysZ3BqDIqsG750am_DOEAE7J1Ahn1CPaLzDPlFWbYkCOI7medjZAUS_WiXUPugF-onk5x0phP1dRIK38P2cAbNWlbE2d3QW7PuWZGIUwQMMtqR_CGWWTreB3JqGJHGMshx2'
}

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer