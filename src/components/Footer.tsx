import getCurrentYear from "../utilities/getCurrentYear";

const Footer = () => {
  const year = getCurrentYear();

  return (
    <>
      <p className="readTheDocs mt-4">&copy;{year} Punreliable</p>
    </>
  );
};

export default Footer;
