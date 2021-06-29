import axios from "axios";
import { useMemo, useState } from "react";
import GitRow from "./GitRow";
import GitHeader from "./GitHeader";

const GitSearch = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(null);
  const [countLoaded, setCountLoaded] = useState(10);

  useMemo(async () => {
    if (!!input) {
      setList(null);
    }
    if (input.length > 3) {
      const res = await axios.get(
        `https://api.github.com/search/users?q=` +
          input +
          "&per_page=" +
          countLoaded
      );
      setList(res.data);
    }
  }, [input, countLoaded]);

  return (
    <div className='gitSearch'>
      <GitHeader onChange={(e) => setInput(e.target.value)} value={input} />
      <div className='gitSearch--body'>
        {!!list ? (
          list?.items?.map((el, id) => {
            return <GitRow key={id} el={el} />;
          })
        ) : (
          <p className='gitSearch--noResult'>Aucun résultat</p>
        )}
      </div>
      {!!list && (
        <div className='gitSearch--footer'>
          <button
            onClick={() => setCountLoaded(countLoaded + 20)}
            className='gitSearch--loadMore'
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default GitSearch;
