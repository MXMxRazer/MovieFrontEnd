import '../../sass/SassComponents/home.css';
import Header from '../header/header';
import { filteringItems, labelOptions } from '../storage/storage';
import FilterBox, { Selector } from './filter';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import titleChanger from '../titleChanger';

type searchType = {
    searchType?: string;
}

export default function SearchMain({ searchType }: searchType) {

    //State management
    const [value, setValue] = useState<Selector | undefined>(labelOptions[0]);
    const [multiValue, setMultiValue] = useState<Selector[]>([labelOptions[0]]);
    const searchBarResult = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    //random variables 
    let counter = 0;

    titleChanger(`DemoMovies: Home`);

    return (
        <div className="search-main">
            <div className="header-section">
                <Header
                    measurement={false}
                />
            </div>
            <div className="search-bar-section">
                <input
                    type="text"
                    placeholder="Search here..."
                    className='search-bar'
                    ref={searchBarResult}
                    onKeyDown={e => {
                        (e.key === "Enter") ? navigate(`${searchBarResult.current?.value}`) : 1;
                    }}
                />
                <div className="filter">
                    <div className="filter-section">
                        {
                            Object.keys(filteringItems).map(item => {
                                return (
                                    <div
                                        className='filtering-content'
                                    >
                                        <p className="filter-text-content">
                                            {item}
                                        </p>
                                        <span className="selector">
                                            <FilterBox
                                                key={item}
                                                increment={counter++}
                                                options={labelOptions}
                                                onValueChange={e => {
                                                    setMultiValue(e);
                                                }}
                                                selected={multiValue}
                                                multiple
                                            />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <FilterBox
                increment={1}
                options={labelOptions}
                onValueChange={e => {
                    setValue(e);
                }}
                selected={value}
            /> */}
            <main>
                <div className="title-search">
                    <h1>Search results for: {searchType}</h1>
                </div>
                <h1>HERE IS THE MAIN SECTION</h1>
            </main>
        </div>
    );
}