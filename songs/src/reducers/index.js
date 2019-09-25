import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Time', duration: '4:05' },
        { title: 'No Time For Caution', duration: '3:15' },
        { title: 'Mountains', duration: '3:30' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})