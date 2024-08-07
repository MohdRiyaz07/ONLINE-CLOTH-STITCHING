import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <section className="header">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
           <a className="navbar-brand" href="index.html">
            ONLINE CLOTH STITCHING
           </a>
            <div className="nav-links" id="navlinks">
              <ul>
                  <li><a href="index.html">HOME</a> </li>
                  <li><a href="user.html">USER</a></li>
                  <li><a href="SHOP NOW.HTML">SHOP NOW</a></li>
                  <li><a href="customization_front.html"> CUSTOMIZATION </a> </li>
                  <li><a href="rental.html"> RENTAL </a></li>
                  <li><a href="">FEEDBACK</a></li>
                  <li><a href="CONTACT_US.HTML"> CONTACT US</a></li>
              </ul>
            </div>
        </div>
      </nav>
    </section>

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="./images/pexels-tima-miroshnichenko-6765063.jpg" alt="First slide"/>
          <div className="carousel-caption d-none d-md-block">
            <h5 style="color: black; font-family: 'Courier New', Courier, monospaces; font-weight: bold;">Riyaz</h5>
            <p>welcome</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="./images/pexels-pixabay-461035.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="images/pexels-tima-miroshnichenko-6766387.jpg" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>




      {/* <!--collections --> */}
    <section className="row p-0 m-0" style="padding: 10% 0%;">
      
      <h1 className="p-4">Collections</h1>
      <section className="col-lg-4 p-4 ">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a className="collection_text p-4 fs-4 text-dark" style="text-decoration: none;" href="SHIRTS.HTML">
              <img src="images/formal-pant-shirt-for-men-96965111.jpg" href="SHIRTS.HTML" className="zoom position-relative d-block w-100 p-4" alt="."/>
              Shirts -/
            </a>
            
          </div>
         
        </div>
      </div>
      
      </section>
        <section className="col-lg-4 p-4" >
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a className="collection_text p-4 fs-4 text-dark" style="text-decoration: none;" href="pants.html">
                <img src="images/744149114ac8678df8655361878ef1e1.jpg" href="pants.html" className="zoom position-relative d-block w-100 p-4" alt="./"/>
                Pants -</a>
              </div>
            </div>
          </div>
        </section>
        <section className="col-lg-4 p-4 " >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a className="collection_text p-4  fs-4 text-dark" style="text-decoration: none;" href="KURTAS.HTML">
              <img src="images/White-Hanger-Raw-Silk-Cream-Mens-Kurta-Pajama-22201052452-1.jpg" href="KURTAS.HTML" className="zoom position-relative d-block w-100 p-4" alt="."/>
              Kurtas -</a>
            </div> 
          </div>
        </div>
      </section>
      <br/>
    </section>




   {/* <!--footer--> */}
    <nav id="footer" className="navbar  navbar text-light bg-dark p-2">
      <div className="container row">

        <div className="col-lg-4 text-center mb-4 text-center">
          {/* <!--<img src="   " style="height:100px">--> */}
          <br/>
          <H2> OCS </H2>
          <P>ONLINE CLOTH STITCHING</P>
        </div>
        <br/>
        <div id="find_us_on" className="col-lg-2  mb-4" style="padding: 7% 0%;">
          <h4>Find us on</h4>
          <a className="text" href="https://www.facebook.com/profile.php?id=100087419500577" style="text-decoration: none; color: white;"><img src="https://i.ibb.co/cQzLTC1/icons8-facebook-48.png" alt="...." style="height:22px" classNameName="m-1">FACEBOOK</a><br/>
          <a className="text" href="https://www.instagram.com/ajayfromayejude/" style="text-decoration: none; color: white;"><img src="https://i.ibb.co/mS1xsCq/Pngtree-instagram-icon-8704817.png" style="height:20px" classNameName="m-1">INSTAGRAM</a><br/>
          <a className="text" href="https://www.youtube.com/ayejude" style="text-decoration: none; color: white;"><img src="https://i.ibb.co/3cMbk7H/icons8-youtube-48.png" style="height:20px" classNameName="m-1 ">YOUTUBE</a><br/>
        </div>
        <br/>
        <div id="Help_&_Support" className="col-lg-2 mb-4">
          <h4>Help&Support</h4>
          <a style="text-decoration: none; color: white;" href="E-comm_project(refund).html" className="text">Refund</a><br/>
          <a style="text-decoration: none; color: white;" href="E-comm_project(terms&conditions).html" className="text">Terms&Conditions</a><br/>
          <a style="text-decoration: none; color: white;" href="E-comm_project(shipping).html" className="text">Shipping</a>
        </div>
       
      </div>
    </nav>

    
    </div>
  );
}

export default App;
