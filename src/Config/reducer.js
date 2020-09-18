//INITIAL VALUES OF DATA
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item: null,
    weekly: null,
    spotify:null,
    // token:"BQDxVrZQo1kLW0crvS_-Qv7Wd377ogt1RqqgVtIxJqVP4HrHxEs24A99f8-1bzyH2CmKtg7Grrcn2PUSUqIPZf0QEJ1qBHHSONGVy4Xk7PRYvOZ4CTgxAdTMxwk6-admte_b6hPh1jAax82AUmF0CCmzxpkAZCZtVscKVvRdU_lhIRK8",
};



const reducer = (state,action) => {
    // console.log(action);
    
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist : action.playlist

            }

        case 'SET_WEEKLY':
            return {
                ...state,
                weekly: action.weekly,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify : action.spotify
            }
        
        default:
            return state;
        
    }
}

export default reducer;