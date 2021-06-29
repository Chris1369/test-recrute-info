import { Link } from "react-router-dom";

const GitHeader = ({ onChange, value }) => {
  return (
    <div className='gitSearch--header'>
      <Link to='/' className='gitSearch--checklistBtn'>
        Checkbox List
      </Link>
      <input
        onChange={onChange}
        type='text'
        className='gitSearch--inputSearch'
        placeholder='Rechercher'
        value={value}
      />
    </div>
  );
};

export default GitHeader;
