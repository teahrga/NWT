import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travel Blog</span>
        <span className="headerTitleLg">Let's visit Croatia</span>
      </div>
      <img
        className="headerImg"
        src="https://media.cntraveller.com/photos/611bf4cf22be3ca7e5c01168/4:3/pass/krk-gettyimages-514118864.jpg"
        alt=""
      />
    </div>
  );
}
