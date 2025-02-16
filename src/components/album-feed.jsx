import AlbumDiv from "./album-div";

export default function AlbumFeed() {
    return (
        <div className="flex flex-col my-5 bg-gray-100 w-[80vw] h-[20vh] items-center p-5 ">
                <h1>Feed de albums</h1>
            <div className="flex   bg-gray-100 w-[80vw] h-[20vh] items-center ">
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
                <AlbumDiv />
            </div>
        </div>
    );
}