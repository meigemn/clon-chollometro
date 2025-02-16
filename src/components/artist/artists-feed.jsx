import ArtistDiv from "./artist-div";

export default function ArtistsFeed() {
    return (
        <div className="flex flex-col mt-15 bg-gray-100 w-[80vw] h-[20vh] items-center p-5 ">
            <h1>Feed de artistas</h1>
            <div className="flex flex flex-wrap   bg-gray-100 w-[80vw] h-[20vh] items-center ">

                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
            </div>
        </div>
    );
}