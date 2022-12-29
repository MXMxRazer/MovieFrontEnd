import { useNavigate } from 'react-router-dom';
import '../../sass/SassComponents/home.css';

export default function Logo() {

    const navigate = useNavigate();

    return (
        <div
            className="typo"
            onClick={e => {
                navigate(`${'/'}`);
            }}
        >
            <h1 id="demo-movies"><span id="demo">Demo</span><span id="movies">Movies</span></h1>
        </div>
    );
}