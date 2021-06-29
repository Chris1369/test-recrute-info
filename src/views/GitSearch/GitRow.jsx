const GitRow = ({ el }) => {
  console.log("🚀 ~ file: GitRow.jsx ~ line 2 ~ GitRow ~ el", el);
  return (
    <div className='gitSearch--body--item'>
      <img src={el.avatar_url} alt='' width='90px' />
      <p>{el.login}</p>
    </div>
  );
};

export default GitRow;
