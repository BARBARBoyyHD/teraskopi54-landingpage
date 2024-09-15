import "./App.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import logo from "./asset/Teraskopilogo.png";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
      <section className="landingpage">
        <div className="left">
          <header>
            <div className="wrap-navigation">
              <div className="navigation">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#Review">Review</a>
              </div>
            </div>
          </header>
          <div
            className="quote-position"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div
              className="wrap-quote"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "50px",
                }}
              >
                Elevate your day, elevate your coffee.
              </h1>
              <div className="line" style={{}}></div>
              <p style={{ color: "grey" }}>
                Indulge in the perfect blend of rich flavors and cozy atmosphere
                at Teras Kopi 54. Our expertly crafted coffee drinks are made
                with love, using only the finest ingredients to ensure every sip
                is a delight. From classic favorites to unique signature blends,
                our menu has something for every palate.
              </p>
              <div className="ig">
                <a
                  href="https://www.instagram.com/teraskopi54?igsh=aDJpOTU4NjJpeDhw"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    textDecoration: "none",
                  }}
                >
                  <i
                    className="fab fa-instagram fa-4x"
                    style={{ color: "white" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          {" "}
          <img
            src={logo}
            style={{ width: "100px", height: "100px" }}
            alt="Teras Kopi 54"
          />
        </div>
        <div className="right">
          <header>
            <div className="wrap-contact">
              <a href="/contact" className="contact">
                Contact
              </a>
            </div>
          </header>
        </div>
      </section>
      <section className="about-us" id="about">
        <div
          className="description"
          style={{ textAlign: "center", color: "white" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>About Us</h1>
          <p>
            Located in the heart of Bandung, Jl. Panorama 54, Gegerkalong, Teras
            Kopi 54 is a cozy coffee shop that offers a warm and inviting
            atmosphere for coffee lovers to gather, relax, and enjoy a great cup
            of coffee.
          </p>
          <p>
            Teras Kopi 54 is more than just a coffee shop - it's a community.
            Our story began with a passion for coffee and a desire to create a
            space where people could come together to share ideas, make new
            friends, and enjoy a great cup of coffee. Our team is dedicated to
            serving the best coffee in town, made from high-quality beans
            sourced from local farmers.
          </p>
        </div>
      </section>
      <section className="review" id="Review">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="image1"></div>
          <div className="satisfaction">
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "40px", color: "#e4d0a0" }}>2000+ </h1>
              <p style={{ fontSize: "20px", color: "#fffbfb" }}>
                Happy Customer
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "40px", color: "#e4d0a0" }}>3000+ </h1>
              <p style={{ fontSize: "20px", color: "#fffbfb" }}>
                Coffe Was Sold
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "40px", color: "#e4d0a0" }}>1000+ </h1>
              <p style={{ fontSize: "20px", color: "#fffbfb" }}>
                Desert and Meal was Eats
              </p>
            </div>
          </div>
          <div className="image2"></div>
        </div>
      </section>
      <section className="our-best-product" id="Best-Product">
        <div
          className="product-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{alignItems:"center",justifyContent:"center"}}
        >
          <h1 style={{ color: "#fffbfb" }}>Our Best Product</h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap",alignItems:"center",justifyContent:"center" }}>
            <div
              className="product-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
              }}
            >
              <div className="box"></div>
              <div className="product-description">
                <h1 style={{ fontSize: "15px" }}>Kopi Susu Gula Aren</h1>
                <p style={{ fontSize: "15px", textAlign: "center" }}>
                  A sweet and creamy coffee drink made with coffee, sugar, and
                  palm sugar, served over ice.
                </p>
                <div
                  style={{
                    margin: "0px",
                    fontSize: "10px",
                    color: "#e4d0a0",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <h3>Hot : Rp. 18.000</h3>
                  <h3>Ice : Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div
              className="product-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
              }}
            >
              <div className="box-1"></div>
              <div className="product-description">
                <h1 style={{ fontSize: "15px" }}>Cappuccino</h1>
                <p style={{ fontSize: "15px", textAlign: "center" }}>
                  A triple-layered treat in a large cup, with espresso, steamed
                  milk, and frothed milk foam.
                </p>
                <div
                  style={{
                    margin: "0px",
                    fontSize: "10px",
                    color: "#e4d0a0",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <h3>Hot : Rp. 18.000</h3>
                  <h3>Ice : Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div
              className="product-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
              }}
            >
              <div className="box-2"></div>
              <div className="product-description">
                <h1 style={{ fontSize: "15px" }}>Vanilla Latte</h1>
                <p style={{ fontSize: "15px", textAlign: "center" }}>
                  A velvety-smooth drink in a large cup, combining espresso,
                  steamed milk, and a hint of vanilla sweetness.
                </p>
                <div
                  style={{
                    margin: "0px",
                    fontSize: "10px",
                    color: "#e4d0a0",
                    display: "flex",
                    gap: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <h3>Hot : Rp. 18.000</h3>
                  <h3>Ice : Rp. 20.000</h3>
                </div>
              </div>
            </div>
            <div
              className="product-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
              }}
            >
              <div className="box-3"></div>
              <div className="product-description">
                <h1 style={{ fontSize: "15px" }}>Americano</h1>
                <p style={{ fontSize: "15px", textAlign: "center" }}>
                  A smooth and mellow espresso drink in a large cup, diluted
                  with hot water for a refreshing twist.
                </p>
                <div
                  style={{
                    margin: "0px",
                    fontSize: "10px",
                    color: "#e4d0a0",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <h3>Hot : Rp. 15.000</h3>
                  <h3>Ice : Rp. 17.000</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#090e0c",
        }}
      >
        <h1 style={{ color: "white" }}>Find us !</h1>
        <div
          className="google-maps"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1513631974836!2d107.5957448877124!3d-6.8653109579248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c25ef8e241%3A0xe7cc04841702b1a1!2s54B%20Kostan%20-%20SetiabudiBandung!5e0!3m2!1sen!2sid!4v1725822623889!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <footer
        style={{
          width: "auto",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#090e0c",
          flexWrap: "wrap",
        }}
      >
        <div className="wrap-footer">
          {/* logo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <div className="logo">
              {" "}
              <img
                src={logo}
                style={{ width: "100px", height: "100px" }}
                alt="Teras Kopi 54"
              />
            </div>
            <p style={{ color: "#d9d9d9" }}>Good vibes, great coffee.</p>
          </div>
          {/* navigation */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <a href="#about">About us</a>
            <a href="#Best-Product">Product</a>
            <a href="#Review">Review</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <p style={{ margin: 0, color: "#d9d9d9", fontWeight: "bold" }}>
              Time
            </p>
            <p style={{ margin: 0, color: "#d9d9d9" }}>Monday - sunday</p>
            <p style={{ margin: 0, color: "#d9d9d9" }}>09:00-24:00</p>
          </div>

          {/* phone */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <p style={{ margin: 0, color: "#d9d9d9", fontWeight: "bold" }}>
              Phone
            </p>
            <p style={{ margin: 0, color: "#d9d9d9" }}>0812-3013-0720</p>
          </div>
          {/* address */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems:"center",
              width: "auto",
            }}
          >
            <p style={{ margin: 0, color: "#d9d9d9", fontWeight: "bold" }}>
              Address
            </p>
            <p style={{ margin: 0, color: "#d9d9d9" }}>
              Jl. Kapten Abdul Hamid Jl. Dr. Setiabudi No.54B
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <div className="ig">
              <a
                href="https://www.instagram.com/teraskopi54?igsh=aDJpOTU4NjJpeDhw"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textDecoration: "none",
                }}
              >
                <i
                  className="fab fa-instagram fa-4x"
                  style={{ color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <p style={{ color: "white" }}>Copyright @ Muhammad Nahrul Hayat</p>
      </footer>
    </div>
  );
}

export default App;
