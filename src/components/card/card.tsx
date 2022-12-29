import { useNavigate } from 'react-router-dom';
import '../../sass/SassComponents/card.module.css';

export default function Card({ id, title, year, score, type, image }: any) {

    const renewImg = image.toString().replaceAll(",", " ").trim();

    const navigation = useNavigate();

    let pic = `url('${renewImg}')`;

    const loadedCard = (<div className='card'
        id={id.toString()}
        style={{
            backgroundImage: pic,
        }}
        onClick={e => {
            (type === "movie") ?
                (() => {
                    navigation(`/movies/${title}`);
                })
                :
                navigation(`/tvShows/${title}`)
        }}
    >
        <div className="card-contents">
            <div className="card-content-details">
                <div className="heading">
                    {title}
                </div>
                <div className="details">
                    <p className="type detail"><span className='detail-title'>Type:</span> {type}</p>
                    <p className="duration detail"><span className='detail-title'>Year:</span> {year}</p>
                    <div className="ratings">
                        <div className="imDb"><span className='detail-title'>IMDB Rating:</span> {score / 10}/10</div>
                        <div className="tomato"><span className='detail-title'>Tomato:</span> {score}%/100%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

    return (
        loadedCard
    );

}; 