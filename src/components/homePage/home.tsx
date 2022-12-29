import ironMan from '../../images/Iron_Man.png';
import '../../sass/SassComponents/home.css';
import imDb from '../../images/imdb.png';
import mDb from '../../images/mdb.png';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import titleChanger from '../titleChanger';

export default function Home() {

    const searchMessage = useRef<HTMLInputElement>(null);

    const refPasser = () => {
        console.log(searchMessage.current?.value);
    }

    const paragraph = (
        'This is a demo project web app that works on the basis of backend APIs, containing a bockage limit through various top end webs such as IMDB, e.t.c.'
    );

    titleChanger("DemoMovies");

    return (
        <div className="homePage">
            <div className="bg-illusion"></div>
            <div className='home-content'>
                <div className="info-section">
                    <Logo />
                    <p
                        id="info-text"
                    >{paragraph}</p>
                    <form
                        className="form-section"
                        onSubmit={e => {
                            e.preventDefault();
                        }}
                    >
                        <input
                            type="text"
                            placeholder='Search here...'
                            id='search-bar'
                            ref={searchMessage}
                            onKeyDown={key => {
                                (key.key === "Enter") ?
                                    refPasser() :
                                    null;
                            }}
                        />
                        <button
                            id="search-btn"
                            onClick={e => {
                                refPasser();
                            }}
                            onKeyDown={key => {
                                (key.key === "Enter") ?
                                    refPasser() :
                                    null;
                            }}
                        >
                            Search
                        </button>
                        <Link to={"/search"}>
                            <button
                                id="homepage-btn"
                            >
                                Home-Page
                            </button>
                        </Link>
                    </form>
                    <div
                        className="supporter-section"
                    >
                        <p
                            id="header"
                        >Powered By:</p>
                        <img src={imDb} alt="imdb" id="imdb-logo" />
                        <img src={mDb} alt="mdb" id="mdb-logo" />
                    </div>
                </div>
                <div className="graphical-section">
                    <img src={ironMan} alt="Iron Man Image" id='ironManImg' />
                </div>
            </div>
        </div>
    )
}