export default function AlbumDiv() {
    return (
        <div className="w-[80px] h-[80px] mx-auto mt-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110">
            <img src="/src/assets/album.jpg" alt="album" className="w-full h-full object-cover" />
        </div>
    );
}