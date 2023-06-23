export default function Loader() {
  return (
    <div className="loader-positioning">
      <div className="loader-circle">
        <p className="loader-content">LOADING</p>
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
}
