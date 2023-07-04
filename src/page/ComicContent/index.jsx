import React, { useState } from 'react';
import FavoritesButton from '../../page/buttons/FavoritesButton.jsx';
import '../../components/styles.css';


function ComicContent({ comic, addToFavorites, isFavorite, removeFromFavorites, relatedAnime, relatedImages }) {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [selectedPicture, setSelectedPicture] = useState(comic.main_picture.large);

  const handleRelatedAnimeClick = anime => {
    setSelectedAnime(anime);
  };
  
  const handlePictureClick = picture => {
    setSelectedPicture(picture);
  };
  return (
    <div className="comic-details-container">
      <div className="comic-details-image">
        <img src={selectedPicture} alt={comic.title} style={{ width: "100%", height: "auto" }} />
      </div>
      <h3>Pictures</h3>
        <ul className="comic-details-pictures">
          {comic.pictures && (
            <div className="comic-details-pictures">
              {comic.pictures.map(picture => (
                <img key={picture.id} src={picture.large} alt={comic.title} className="comic-details-picture" onClick={() => handlePictureClick(picture.large)} />
              ))}
            </div>
          )}
        </ul>
      <div className="comic-details-info">
        <h3>Alternative Titles</h3>
        <ul>
          {comic.alternative_titles.synonyms.length > 0 && (
            <li>Synonyms: {comic.alternative_titles.synonyms.join(', ')}</li>
          )}
          <li>English: {comic.alternative_titles.en}</li>
          <li>Japanese: {comic.alternative_titles.ja}</li>
        </ul>
        
      </div>
      <div className="comic-details-content">
        <h2>{comic.title}</h2>
        <p>{comic.synopsis}</p>
        <FavoritesButton addToFavorites={addToFavorites} isFavorite={isFavorite} removeFromFavorites={removeFromFavorites} />
        <p>Start Date: {comic.start_date}</p>
        <p>End Date: {comic.end_date}</p>
        <p>Mean Score: {comic.mean}</p>
        <p>Rank: {comic.rank}</p>
        <p>Popularity: {comic.popularity}</p>
        <p>Number of Episodes: {comic.num_episodes}</p>
        <p>Genres: {comic.genres.map(genre => genre.name).join(', ')}</p>
        <p>Studios: {comic.studios.map(studio => studio.name).join(', ')}</p>
        {comic.related_anime && (
        <div>
          <h3>Related Anime</h3>
          <ul className="comic-details-related-anime">
            {comic.related_anime.map(anime => (
              <li key={anime.node.id} onClick={() => handleRelatedAnimeClick(anime.node)}>
                <img src={anime.node.main_picture.medium} alt={anime.node.title} />
                <div>
                  <p>{anime.relation_type_formatted}</p>
                  <a href={`https://myanimelist.net/anime/${anime.node.id}`} target="_blank" rel="noopener noreferrer">{anime.node.title}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}
export default ComicContent;