import { Link } from "react-router-dom";


export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">
           
           <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/logo.jpg?alt=media&token=fe18df38-3c86-4cf7-9a7e-07e45504f3c4"></img>
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrantes">
                  Integrantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Music">
                  Musica
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Fans">
                  FANS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hook">
                  Hook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
