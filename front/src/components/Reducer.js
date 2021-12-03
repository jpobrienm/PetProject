
export function reducer(state, action){
    switch(action.type){
        case 'search-window':
            return {...state, windowDisplayed: 'search'}
        case 'create-window':
            return {...state, windowDisplayed: 'create'}
        case 'swap-recording':
            const recordingState = state.recording;
            return {...state, recording: !recordingState}
        case 'add-blob':
            return {...state, video_blob: action.item}
        case 'null-blob':
            return {...state, video_blob: null}
        case 'add-name':
            return {...state, request_name: action.item}
        case 'add-tags':
            return {...state, request_tags: action.item}
        case 'clear-request':
            return {...state, request_name: null, video_blob: null, request_tags: null}
        default:
          return state
      }
}
