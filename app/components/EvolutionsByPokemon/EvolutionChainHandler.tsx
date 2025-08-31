const EvolutionChainHandler = (props: { url: string }) => {
  console.log('I am in the Evolution Chain Component');
  const chainURL = props.url;

  return (
    <>
      <p>This is part of an Evolution Chain</p>
      <p>{chainURL}</p>
    </>
  );
};
export default EvolutionChainHandler;
