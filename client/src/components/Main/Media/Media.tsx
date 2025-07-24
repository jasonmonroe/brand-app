
let recentMedia = [];
let popularMedia = [];
let randomStory = getRandomStory();

function getRandomStory()
{
    return {
        "alt": "",
        "location": "",
        "src": "",
        "title": "",
    };
}


export function Media() {

    function displayRecentMedia() {
        alert('You clicked on Recent');
    }

    function displayPopularMedia() {
        alert('You clicked on Popular');
    }

    return (
        <>
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-images" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                    <path
                        d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
                </svg>

                Media
            </h3>

            <nav>
                <ul>
                    <li onClick={() => displayRecentMedia()}>Recent</li>
                    <li onClick={() => displayPopularMedia()}>Popular</li>

                </ul>
            </nav>

            <div id={"recent-media-container"}>

            </div>

            <div id={"popular-media-container"}>

            </div>

            <article id="random-story-container">
                <img src={ randomStory.src } alt={ randomStory.alt } />
                <p>{ randomStory.location }</p>
                <p>{ randomStory.title }</p>
            </article>
        </>
    );
}
