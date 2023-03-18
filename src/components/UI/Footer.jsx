const Footer = () => {
  const date = new Date();
  const year = date.getFullYear().toString();

  return (
    <>
      {/* <p className="readTheDocs">
        Click on the Vite and React logos to learn more
      </p> */}
      <p className="readTheDocs mt-4">&copy;{year} Punreliable</p>
    </>
  );
};

export default Footer;
