import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/characterSlice";
import Masonry from "react-masonry-css";
import "./style.css";
import { Link } from "react-router-dom";
export default function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to="/char/2">
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <div>{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ textAlign: "center", padding: "10px" }}>
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            {status === "loading" && <div>Loading</div>}
            Load More ({nextPage})
          </button>
        )}
      </div>
    </div>
  );
}
