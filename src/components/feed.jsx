import AlbumFeed from "./album-feed";
import ArtistsFeed from "./artists-feed";
import RadioFeed from "./radio-feed";
import SearchBar from "./search-bar";

export default function Feed() {
    return (
        <>
        

        
        <div className="flex flex-col items-center justify-center  bg-gray-400 w-[80vw] h-[80vh] gap-3">
        <SearchBar />
        <ArtistsFeed />
        <AlbumFeed />
        <RadioFeed />
        </div>

        </>
    );
}