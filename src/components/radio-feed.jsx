import RadioDiv from "./radio-div";

export default function RadioFeed() {
    return (
        <div className="flex flex-col my-5 bg-gray-100 w-[80vw] h-[20vh] items-center p-5 ">
                <h1>Feed de radios</h1>
            <div className="flex   bg-gray-100 w-[80vw] h-[20vh] items-center ">
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
            </div>
        </div>
    );
}