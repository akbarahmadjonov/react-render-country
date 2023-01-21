const Header = () => {
  return (
    <header className="site-header p-3 shadow-sm">
      <div className="spinner">
        <div className="loading"></div>
      </div>
      <div className="container w-100">
        <h1 className="visually-hidden">Where in the world</h1>
        <div className="site-header__inner d-flex align-items-center justify-content-between">
          <h2 className="h5 m-0">
            <i className="fa-solid fa-earth-asia"></i> World in your hand!
          </h2>
          <div className="dark-mode">
            <button className="border-0 bg-transparent dark">
              <em className="fa-regular fa-moon"></em>
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
