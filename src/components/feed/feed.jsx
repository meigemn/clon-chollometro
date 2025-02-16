import SearchBar from "../search-bar/search-bar";

import AlbumFeed from "../album/album-feed";
import RadioFeed from "../radio/radio-feed";
import ArtistsFeed from "../artist/artists-feed";

export default function Feed() {
    return (
        <>

            <div className="overflow-y-auto  flex flex-col items-center justify-center  bg-gray-400 w-[80vw] h-[80vh] gap-3">
                <SearchBar />
                <ArtistsFeed />
                <AlbumFeed />
                <RadioFeed />
            </div>

        </>
    );
}