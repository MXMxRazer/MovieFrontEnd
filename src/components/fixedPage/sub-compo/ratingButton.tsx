import { AiFillStar } from 'react-icons/ai';
import '../../../sass/SassComponents/ratingButton.css';

type rating = {
    ratingNumber: 1 | 2 | 3 | 4 | 5;
};

export default function RatingButton({ ratingNumber }: rating) {

    let rateCalculator: any = new Array(ratingNumber).fill(1);

    return (
        <div className="super-rating-button">
            <div className="rating-button">
                {
                    rateCalculator.map((item: any) => {
                        return (
                            <AiFillStar className="rating-star" />
                        );
                    })
                }
            </div>
        </div >
    );
}