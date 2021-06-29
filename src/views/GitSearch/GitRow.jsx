const GitRow = ({ el }) => {
  return (
    <div className='gitSearch--body--item'>
      <img src={el.avatar_url} alt='' width='90px' />
      <p>{el.login}</p>
    </div>
  );
};

export default GitRow;
