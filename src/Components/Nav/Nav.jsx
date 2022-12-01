import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavCss.css";
class Nav extends Component {
  state = {clicked : false};
  handleClick = ()=>{
    this.setState({clicked : !this.state.clicked})
  }

  render(){

    return (
    <div>
      <nav className="navbar container ">
        <div className="logo">
          <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/1695/7273/files/logo_53c0cc6e-938b-4d5b-841b-152989e139e8_200x.jpg?v=1643792377"
              alt=""
            />
          </Link>
        </div>
        <div className="searchBar">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="navBarIcon">
          <div className="wishList">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="carticon">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>

        
      </nav>

      <hr className="navLine1" />

      {/* Navbar Menu */}

      <div className="navMenu container">
         {/* Mobile menu */}
         <div id="mobile" onClick={this.handleClick}>

<i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

</div>

{/* Mobile Menu End */}
        <div>
          <Link to="#">New In</Link>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            CLOTHING &nbsp;
            <i class="fa-sharp fa-solid fa-arrow-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/#">DRESSES</Link>
            <Link to="/#">CO-ORD SETS</Link>
            <Link to="/#">SHIRTS</Link>
            <Link to="/#">JUMPSUITS</Link>
            <Link to="/#">SCARVES</Link>
            <Link to="/#">HAND MIST SPRAYS</Link>
            <Link to="/#">TROUSERS</Link>
            <Link to="/#">LEGGINGS</Link>
            <Link to="/#">TOPS</Link>
            <Link to="/#">SALE</Link>
          </div>
        </div>

        <div>
          <Link to="#">Best Sellers</Link>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            COLLECTIONS &nbsp;
            <i class="fa-sharp fa-solid fa-arrow-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/#">PLUS SIZES</Link>
            <Link to="/#">LET'S PAINT THE TOWN PURPLE</Link>
            <Link to="/#">PARTY DRESSES</Link>
            <Link to="/#">BRASSO DRESSES</Link>
            <Link to="/#">TIERED MAXI DRESS</Link>
            <Link to="/#">WRAP STYLES</Link>
            <Link to="/#">100% COTTON STYLES</Link>
            <Link to="/#">POLKA DOT</Link>
            <Link to="/#">LOUNGEWEAR</Link>
            <Link to="/#">TIE DYE</Link>
            <Link to="/#">JERSEY DRESSES</Link>
            <Link to="/#">SCHIFFLI STYLES</Link>
          </div>
        </div>

        <div>
          <Link to="#">The Gift Shop</Link>
        </div>
        <div>
          <Link to="#">Plus Size</Link>
        </div>
        <div>
          <Link to="#">Shop Instagram</Link>
        </div>
        <div>
          <Link to="#">Winter Wear 2022</Link>
        </div>

        <div class="dropdown">
          <button class="dropbtn">
            SALE &nbsp;
            <i class="fa-sharp fa-solid fa-arrow-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/#">FLEECE STYLES</Link>
            <Link to="/#">JACKETS</Link>
            <Link to="/#">SWEATSHIRTS</Link>
            <Link to="/#">TRACKPANTS</Link>
            <Link to="/#">STYLES @999/-</Link>
          </div>
        </div>
       
      </div>
      <hr className="navLine2" />
    </div>
  );
};
}

export default Nav;
