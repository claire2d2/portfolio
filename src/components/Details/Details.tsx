import "./Details.css";
const Details = () => {
  return (
    <div className="Details">
      <div className="likes">
        <div>
          <h3>I like</h3>
        </div>
        <div>
          <h3>I dislike</h3>
        </div>
      </div>
      <div className="languages">
        <h3>I speak</h3>
        <ul>
          <li>English</li>
          <li>French</li>
          <li>Chinese</li>
        </ul>
        <div>(y un poco español, si si!)</div>
      </div>
      <div>
        <h3>Let's connect!</h3>
        <ul>
          <li>My linkedin</li>
          <li>
            <a href="https://github.com/claire2d2">Follow me on Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
