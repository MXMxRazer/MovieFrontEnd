import Logo from "../logo/logo";
import { useNavigate } from "react-router-dom";
import '../../sass/SassComponents/newHeader.css';

type searchType = {
    searchInput: string | undefined,
    setSearchInput: React.Dispatch<React.SetStateAction<any>>
};

export default function NewHeader({ searchInput, setSearchInput }: searchType) {

    const navigate = useNavigate();

    return (
        <>
            <div className="search-section-super">
                <div className="search-section" >
                    <div className="header-section">
                        <div className="logo-section">
                            <Logo />
                        </div>
                        <div className="navbar-section">
                            <p className="navbar-content">Home</p>
                            <p className="navbar-content">Contact</p>
                            <p className="navbar-content">Request</p>
                        </div>
                        <div className="search-bar-section">
                            <input
                                type="text"
                                placeholder='search here'
                                className='search-bar'
                                id='src-new-page'
                                value={searchInput}
                                onChange={e => {
                                    setSearchInput(e.target.value);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        setSearchInput("");
                                        navigate(`/search/${searchInput}`);
                                        //@ts-ignore
                                        document.querySelector('#src-new-page').blur();
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}