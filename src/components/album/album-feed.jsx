import AlbumDiv from "./album-div";

export default function AlbumFeed() {
    return (
        <div className="flex flex-col my-5 bg-green-500 w-[75vw] h-[20vh] items-center p-5  rounded-lg [font-family:'Montserrat',sans-serif] tracking-wide ">
                <h1>Feed de albums</h1>
            <div className="flex flex-wrap  w-[75vw] h-[20vh] items-center ">
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
            </div>
        </div>
    );
}