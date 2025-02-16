import Feed from "../feed/feed";
import ProfileHomeContent from "../profile/profile-home-content";

export default function HomePageContent() {
    return (
        <>
        <div className="flex items-center justify-center  bg-gray-100">

        <ProfileHomeContent/>
        <Feed/>
        </div>
        </>
    );
}