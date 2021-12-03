import { useBaseContext } from "./ContextProvider";
import { SearchBar } from "./SearchBar";
import VideoComponent from './VideoComponent';

const ViewerHandler = () =>{
    const {state, dispatch} = useBaseContext()
    return (
        <div>
            {state.windowDisplayed === 'create' && <VideoComponent />}
            {state.windowDisplayed === 'search' && <SearchBar />}
        </div>
    )
}

export default ViewerHandler