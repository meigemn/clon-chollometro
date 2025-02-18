export default function Player() {
    return (
        <div className="flex  items-center justify-center bg-[#98FB98] [font-family:'Montserrat',sans-serif]">
            <div className="w-2/3 flex flex-col items-center">
                <div className="bg-[#35974e]   border-b rounded-t-xl p-4 pb-6  sm:space-y-1  w-full">
                    <div className="flex items-center space-x-4 justify-center w-full">
                        <img
                            src="/src/assets/images/sons_of_aguirre.jpg"
                            alt="Album Cover"
                            width="88"
                            height="88"
                            className="flex-none rounded-lg bg-slate-100"
                            loading="lazy"
                        />
                        <div className="min-w-0 flex-auto space-y-1 font-semibold text-center">
                            <p className="text-white dark:text-cyan-400 text-sm leading-6">
                                <abbr title="Track">Sons of Aguirre</abbr>
                            </p>
                            <h2 className="text-white text-sm leading-6 truncate">
                                Vamos a morir todos
                            </h2>
                            <p className="text-slate-900 dark:text-slate-50 text-lg">
                                Gente rica (Uncommon People)[Version]
                            </p>
                        </div>
                    </div>
                    <div className=" w-full">
                        <div className="relative w-full">
                            <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden w-full">
                                <div
                                    className="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2"
                                    role="progressbar"
                                    aria-label="music progress"
                                    aria-valuenow="1456"
                                    aria-valuemin="0"
                                    aria-valuemax="4550"
                                ></div>
                            </div>
                            <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                                <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm leading-6 font-medium tabular-nums w-full">
                            <div className="text-cyan-500 dark:text-slate-100">1:75</div>
                            <div className="text-slate-500 dark:text-slate-400">3:20</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center justify-center w-full">
                    <div className="flex-auto flex items-center justify-evenly w-full">
                        <button
                            type="button"
                            aria-label="Add to favorites"
                            className="cursor-pointer [transform:active_scale(0.95)]"
                        >
                            <svg width="24" height="24">
                                <path
                                    d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="hidden sm:block lg:hidden xl:block cursor-pointer [transform:active_scale(0.95)]"
                            aria-label="Previous"
                        >
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="m10 12 8-6v12l-8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 6v12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            aria-label="Rewind 10 seconds"
                            className="cursor-pointer [transform:active_scale(0.95)]"
                        >
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5 5v3.111c0 .491.398.889.889.889H9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <button
                        type="button"
                        className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center cursor-pointer [transform:active_scale(0.95)]"
                        aria-label="Pause"
                    >
                        <svg width="30" height="32" fill="currentColor">
                            <rect x="6" y="4" width="4" height="24" rx="2" />
                            <rect x="20" y="4" width="4" height="24" rx="2" />
                        </svg>
                    </button>
                    <div className="flex-auto flex items-center justify-evenly w-full">
                        <button
                            type="button"
                            aria-label="Skip 10 seconds"
                            className="cursor-pointer [transform:active_scale(0.95)]"
                        >
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759 1.176"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="hidden sm:block lg:hidden xl:block cursor-pointer [transform:active_scale(0.95)]"
                            aria-label="Next"
                        >
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="M14 12 6 6v12l8-6Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18 6v12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
