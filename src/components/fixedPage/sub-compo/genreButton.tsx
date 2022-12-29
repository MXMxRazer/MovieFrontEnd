import '../../../sass/SassComponents/genreButton.css';
import CompactButton from './compactButton';

type genres = {
    genres: string[]
};

export default function GenreButton({ genres }: genres) {
    return (
        <div className="super-genre-button">
            {
                genres.map(item => {
                    return (
                        <CompactButton
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
}