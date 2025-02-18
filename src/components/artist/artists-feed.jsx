import ArtistDiv from "./artist-div";

export default function ArtistsFeed() {
    return (
        <div className="flex flex-col mt-15 bg-green-500 w-[75vw] h-[20vh] items-center p-5 rounded-lg [font-family:'Montserrat',sans-serif] tracking-wide ">
            <h1 className="pb-3">Artists</h1>
            <div className="flex flex flex-wrap  w-[75vw] h-[20vh] items-center ">

                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
                <ArtistDiv />
            </div>
        </div>
    );
}