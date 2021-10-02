import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import Masonry from "react-masonry-css";
import "./style.css";
export default function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character, i) => (
          <div key={i}>
            <img
              alt={character.name}
              src={character.img}
              className="character"
            />
            <div>{character.name}</div>
          </div>
        ))}
      </Masonry>
      <div style={{ textAlign: "center", padding: "10px" }}>
        {hasNextPage && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            {isLoading && <div>Loading</div>}
            Load More ({nextPage})
          </button>
        )}
      </div>
    </div>
  );
}
