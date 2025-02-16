import ArtistDiv from "./artist-div";

export default function ArtistsFeed() {
    return (
        <div className="flex flex-col mt-   bg-gray-100 w-[80vw] h-[20vh] items-center ">
            <h1>Feed de artistas</h1>
            <div className="flex   bg-gray-100 w-[80vw] h-[20vh] items-center ">
            
            <ArtistDiv />
            <ArtistDiv />
            <ArtistDiv />
            <ArtistDiv />
            <ArtistDiv />
            </div>
            
        </div>
    );
}