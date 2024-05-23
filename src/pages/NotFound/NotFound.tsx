import useSettings from "../../context/useSettings";
const NotFound = () => {
  const { language } = useSettings();

  return (
    <div>
      {language === "en" ? (
        <div>Whoops! Looks like this page doesn't exist</div>
      ) : (
        <div>Oups ! Cette page n'existe pas !</div>
      )}
    </div>
  );
};

export default NotFound;
