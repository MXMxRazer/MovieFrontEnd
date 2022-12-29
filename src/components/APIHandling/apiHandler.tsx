import NumberSlider from "../numberSlider/numberSlider";
import { optionsMDB, optionsIMDB } from "./apiDetails";

const APIContacter = (setTotal: any, setMovies: any, movies: any, id: any) => {

    fetch(`https://mdblist.p.rapidapi.com/?s=${id}&l=2`, optionsMDB)
        .then(response => response.json())
        .then(response => {
            setTotal(response['total']);
            console.log(response['search']);
            const moVies = response['search'];
            console.log(moVies.length);
            setMovies(moVies);
            console.log("This", movies);

            moVies.forEach((item: any) => {
                fetch(`http://localhost:5000/api`, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ input: item.id })
                }).then(res => {
                    return res.json();
                }).then(res => {
                    return res;
                }).catch(err => {
                    console.log(err);
                })
            })

        })
        .catch(err => console.error(err));
}


export { APIContacter }; 
