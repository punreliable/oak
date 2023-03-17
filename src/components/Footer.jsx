const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();

  return (
    <>
      <p className="readTheDocs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="readTheDocs">{year}</p>
    </>
  );
};

export default Footer;
