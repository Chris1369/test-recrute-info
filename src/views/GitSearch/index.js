import axios from "axios";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className='gitSearch--header'>
        <Link to='/' className='gitSearch--checklistBtn'>
          Checkbox List
        </Link>
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          className='gitSearch--inputSearch'
          placeholder='Rechercher'
        />
      </div>
      <div className='gitSearch--body'>
        {!!list ? (
          list?.items?.map((el, id) => {
            return (
              <div key={id} className='gitSearch--body--item'>
                <img src={el.avatar_url} alt='' width='90px' />

                <a href={el.repos_url}>{el.login}</a>
              </div>
            );
          })
        ) : (
          <p className='gitSearch--noResult'>Aucun résultat</p>
        )}
      </div>
      {!!list && (
        <div className='gitSearch--footer'>
          <button
            onClick={() => setCountLoaded(countLoaded + 20)}
            className='gitSearch--loadMore'>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default GitSearch;
