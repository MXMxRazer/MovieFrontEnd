import { useParams } from 'react-router-dom'
import titleChanger from '../titleChanger';
import { useEffect, useState } from 'react';
import NumberSlider from '../numberSlider/numberSlider';
import Card from '../card/card';
import axios from 'redaxios';
import NewHeader from '../header/newHeader';
import CardSkele from '../skeletons/cardSkele';

var cardArray = new Array(8).fill(1);

export const optionsMDB = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f8d2b4e149msha33fe53f705902ap1b024ejsn2b5f302e1526',
        'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    }
};

const backendResponseHandler = async (movieId: string | undefined, setImages: Function, movieName: string | undefined, images: any) => {

    const res = await axios.post('http://localhost:5000/api', {
        input: movieId
    });

    const data = res.data;
    setImages((prev: any) => {
        return [
            ...prev,
            {
                image: data,
                title: movieName,
                id: movieId
            }
        ]
    });

    console.log('Images: ', images);

}

const axiosRequest = async (setMovies: Function, searchParameter: string | undefined, setTotal: Function, setImages: Function, images: any): Promise<void> => {

    const options: any = {
        method: 'GET',
        url: 'https://mdblist.p.rapidapi.com/',
        params: {
            s: searchParameter,
            l: 8
        },
        headers: {
            'X-RapidAPI-Key': 'f8d2b4e149msha33fe53f705902ap1b024ejsn2b5f302e1526',
            'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
        }
    };

    const res = await axios.request(options);
    const data = res.data;

    data['search'].forEach((item: any) => {

        backendResponseHandler(item.id, setImages, item.title, images);
        console.log(`IMAAAGE::: `, item.id, item.title);
    })
    console.log("AXIOS DATA: ", data);

    setMovies(data['search']);
    setTotal(data['total']);


}

export default function NewPage() {

    const [total, setTotal] = useState<number>();
    const [movies, setMovies] = useState([]);

    const [images, setImages] = useState([{
        image: '',
        title: '',
        id: ''
    }]);


    const { id } = useParams();

    const [searchInput, setSearchInput] = useState<string>();

    useEffect(() => {
        titleChanger(id);
        axiosRequest(setMovies, id, setTotal, setImages, images);

        return (
            setImages([{
                image: '',
                title: '',
                id: ''
            }])
        );

    }, [id]);


    return (
        <div className="search-section-super">
            <div className="search-section" >
                <NewHeader
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <main className="main-search-section">
                    <div className="search-title">
                        Search Results for: {id}
                    </div>
                    <br />
                    <div className="search-title">
                        Total Search Results: {total}
                    </div>
                    <div className="number-slider">
                        <NumberSlider />
                    </div>
                    <article className="showcase-section">
                        {
                            (images.length > 7) ?
                                (
                                    <>
                                        {
                                            movies.map((movie: any, index: number) => (
                                                <Card
                                                    //@ts-ignore
                                                    id={movie.id}
                                                    //@ts-ignore
                                                    title={movie.title}
                                                    //@ts-ignore
                                                    year={movie.year}
                                                    //@ts-ignore
                                                    score={movie.score}
                                                    //@ts-ignore
                                                    type={movie.type}
                                                    //@ts-ignore
                                                    // image={
                                                    //     (images.map((ele: any) => {
                                                    //         if (ele.title == movie.title) {
                                                    //             console.log('ELE: ', ele);
                                                    //             console.log('ELE Image: ', ele.image.URL);
                                                    //             return ele.image.URL;
                                                    //         }
                                                    //     }))
                                                    // }
                                                    image={
                                                        images.map((ele: any) => {
                                                            if (ele.id === movie.id) {
                                                                return ele.image["URL"];
                                                            }
                                                        })
                                                    }
                                                />
                                            ))
                                        }
                                    </>
                                ) :
                                (
                                    <>
                                        {
                                            cardArray.map(item => {
                                                return (
                                                    <>
                                                        <CardSkele />
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                        }
                    </article>
                </main>
            </div>
        </div >
    )
}
