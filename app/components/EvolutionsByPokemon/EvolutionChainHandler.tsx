const EvolutionChainHandler = (props: { url: string }) => {
  const chainURL = props.url;

  return (
    <>
      <p>This is part of an Evolution Chain</p>
      <p>{chainURL}</p>
    </>
  );
};
export default EvolutionChainHandler;
