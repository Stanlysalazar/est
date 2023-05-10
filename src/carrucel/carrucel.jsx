export function Carousel(){
    return(
        <>
        
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/cae.jpg?alt=media&token=14a0ea70-c9ed-48f7-bea9-20c69230a2e3"  className="d-block w-100" alt="imagencity" height="650px"/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/cae2.jpg?alt=media&token=e47581d0-40a8-4c0c-a40e-585f551d0aee" className="d-block w-100" alt="imagencar" height="650px"/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/cae3.jpg?alt=media&token=bbcfe3f8-481a-4961-9075-4ae54805345a" className="d-block w-100" alt="imagenstore" height="650px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}