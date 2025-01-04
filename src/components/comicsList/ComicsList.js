import './comicsList.scss';
import Banner from './Banner.jpg';
import useMarvelService from '../../services/MarvelService';

import { useState } from 'react';


const ComicsList = () => {


    return (
        <div className="comics__list">
            <img src={Banner} alt="banner" />
            
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;