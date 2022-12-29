import Header from "../header/header";
import NewHeader from "../header/newHeader";
import { useState } from "react";
import '../../sass/SassComponents/fixed.css';
import ironMan from '../../images/moviePoster.webp';
import Comments from "./comment";
import GenreButton from "./sub-compo/genreButton";
import RatingButton from "./sub-compo/ratingButton";
import { NoNeedToReleaseEntityManagerError } from "typeorm";
import CompactButton from "./sub-compo/compactButton";

type fixedPage = {
    title: string;
    image?: string
}

export default function FixedPage({ title, image }: fixedPage) {

    const [searchInput, setSearchInput] = useState();

    console.log(`SearchInput: ${searchInput}`);

    return (
        <div className="fixed-page">
            <div className="header">
                <NewHeader
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
            </div>
            <main className="main-section-fixed-page">
                <div className="main-desc-section">
                    <div
                        className="static-card"
                        style={{
                            background: `url(${ironMan})`
                        }}
                    />
                    <div className="description-side">
                        <div className="title">
                            Brave Youth
                        </div>
                        <div className="desc-summary">
                            <div className="summary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga possimus aliquid voluptatum totam recusandae dignissimos sit quasi saepe ducimus obcaecati, nihil iusto laudantium, dolorem tenetur aut qui ipsam adipisci.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque numquam enim eligendi alias commodi tenetur, quisquam velit expedita cupiditate, veritatis repellat excepturi optio animi distinctio. Omnis, quo repudiandae? Enim, non?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, officia quasi molestiae eaque odio quos laudantium sint pariatur veritatis, in, dolorem enim voluptatum hic debitis nisi natus quis sequi est?
                            </div>
                            <div className="genres sub-text"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span id="title">Genre: </span>
                                <GenreButton
                                    genres={['Action', "Drama", 'Romance', "Thriller"]}
                                />
                            </div>
                            <div className="type sub-text">
                                <span id="title">Type: </span>
                                <CompactButton
                                    item={"Movie"}
                                />
                            </div>
                            <div className="Year sub-text">
                                <span id="title"
                                    style={{
                                        marginRight: '0.18em'
                                    }}
                                >Year: </span>
                                <CompactButton
                                    item={"2022"}
                                />
                            </div>
                            <div className="ImDb sub-text"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span id="title">ImDb Rating: </span>
                                <RatingButton
                                    ratingNumber={4}
                                />
                            </div>
                        </div>
                        <main className="main-section">
                            <div className="divider" />
                        </main>
                    </div>
                </div>
                <Comments />
            </main>
        </div>
    );
}