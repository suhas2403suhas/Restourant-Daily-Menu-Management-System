import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-nav-head">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="th.jpg" className='img-logo' alt="img not found" />
          <a className="navbar-brand" href="#">Restourant Daily Menu Management</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mr-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/CMenu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/About-us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Contact-us">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/FeedBack">Give Feed Back</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent