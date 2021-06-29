import { useState } from "react";
import { Link } from "react-router-dom";

const CheckList = () => {
  const list = ["check1", "check2", "check3", "check4", "check5"];
  const [selected, setSelected] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const handleSelect = (e) => {
    let val = e.target.value;
    if (selected.includes(val)) {
      setSelected(selected.filter((el) => el !== val));
    } else {
      setSelected([...selected, val]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === list.length) {
      setSelected([]);
    } else {
      setSelected(list);
    }
    setAllSelected(!allSelected);
  };

  return (
    <div className='checklist'>
      <div className='checklist--container'>
        <div className='checklist--header'>
          <div className='checklist--checkall'>
            <span
              style={{
                backgroundColor: allSelected ? "#003566" : "transparent",
              }}
            />
            <button onClick={() => handleSelectAll()}>Tout selectionner</button>
          </div>
          <Link to='/gitsearch' className='checklist--gitSearch'>
            Git Search
          </Link>
        </div>
        <div className='checlist--content'>
          {list.map((el, id) => (
            <div key={id} className='checklist--checklistItem'>
              <span
                style={{
                  backgroundColor: selected.includes(el)
                    ? "#003566"
                    : "transparent",
                }}
              />
              <input
                onChange={handleSelect}
                type='checkbox'
                id={el}
                checked={selected.includes(el)}
                value={el}
                hidden
              />
              <label
                htmlFor={el}
                style={{
                  textDecoration: selected.includes(el)
                    ? "line-through"
                    : "none",
                }}>
                {el}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckList;
