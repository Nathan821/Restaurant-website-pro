@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Libre Baskerville, serifArial, sans-serif;
  }

body {
scroll-behavior: smooth;
font-family: Libre Baskerville, serifArial, sans-serif;
background-color: #f1f1f1;
}

/_ Header _/
header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
width: 100%;
top: 0;
transition: background-color 0.3s ease;
z-index: 100;
}

.logo {
font-size: 25px;
color: white;
font-weight: bold;
}

.nav-links {
list-style: none;
display: flex;
}

.nav-links li {
margin: 0 20px;
}

.nav-links a {
color: white;
text-decoration: none;
font-size: 18px;
font-weight: bold;
}

.menu-icon {
display: none;
cursor: pointer;
}

#ptext {
margin-top: 20px;
max-width: 900px;
font-size: 28px;
}

#pa1 {
background-color: #ff6347;
padding: 3px;
}

/_ Hero Section _/
.hero {
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: rgb(255, 255, 255);
text-align: center;
}

#spa {
font-size: 28px;
filter: lightness(100%);
filter: brightness(100%);
color: #ffffff;
}

.hero h1 {
font-size: 65px;
margin-bottom: 34px;
animation: fadeInDown 1s ease-in-out;
letter-spacing: 4px;
}

.hero p {
font-size: 40px;
margin-bottom: 38px;
animation: fadeInUp 1s ease-in-out;
}

.cta-button {
background-color: #ff2600;
color: white;
padding: 10px 24px;
text-decoration: none;
font-size: 24px;
border-radius: 5px;
animation: fadeInUp 1.2s ease-in-out;
}

/_home Section_/
#home {
background-image: url(New\ folder/assets/2151153878.jpg);
background-size: cover;
background-position: center;
padding: 100px 0;
width: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
filter: brightness(30px);
}

/_ Section Styles _/
section {
padding: 80px 20px;
}

.about,
.menu,
.gallery,
.services,
.contact {
text-align: center;
}

.about-us {
display: flex;
align-items: center;
justify-content: center;
padding: 40px;
background-color: #fff;
margin-top: 40px;
}

.container {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
max-width: 1200px;
width: 100%;
}

.about-image img {
width: 100%;
height: auto;
border-radius: 8px;
margin-right: 40px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-info {
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 20px;
}

.about-info h2 {
font-size: 2.5rem;
margin-bottom: 15px;
font-family: "Georgia", serif;
color: #333;
}

.about-info p {
font-size: 1.1rem;
color: #666;
line-height: 1.6;
margin-bottom: 15px;
}

.explore-btn {
padding: 12px 24px;
background-color: #ba1c00;
color: #fff;
border: none;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
transition: background-color 0.3s ease;
align-self: flex-start;
}

.explore-btn:hover {
background-color: #ff4500;
}

@media (max-width: 768px) {
.container {
grid-template-columns: 1fr;
}

.about-info h2 {
font-size: 2rem;
}
.hero h1 {
font-size: 34px;
}
}

.menu-items,
.gallery-items,
.services {
display: flex;
justify-content: space-around;
margin-top: 40px;
}

.menu {
max-width: 1500px;
margin: 0 auto;
padding: 20px;
text-align: center;
background-color: #f8f9fa;
}

.menu h1 {
font-size: 2.5rem;
margin-bottom: 20px;
}

.menu-item {
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
padding: 10px 20px;
border-radius: 10px;
margin-bottom: 20px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
cursor: pointer;
position: relative;
overflow: hidden;
transition: transform 0.3s ease;
}
#prc {
position: absolute;
left: 90%;
width: 120px;
height: 60px;
transform: rotate(20deg);
background-color: #00ff84;
transform: translateY(-50%);
}

.menu-item img {
width: 400px;
height: 140px;
object-fit: cover;
border-radius: 10px;
cursor: pointer;
transition: transform 0.3s ease-in-out;
}

.menu-item:hover {
transform: translateY(-50%) rotate(10deg);
}

.menu-item:hover img {
transform: scale(1.1);
margin: 10px;
}

.item-details {
flex-grow: 1;
margin-left: 20px;
text-align: left;
}

.item-details h2 {
font-size: 1.5rem;
font-weight: bold;
margin-bottom: 5px;
position: relative;
}

.item-details p {
font-size: 0.9rem;
color: #777;
}

.price {
font-size: 1.5rem;
font-weight: bold;
color: #333;
}

@media (max-width: 768px) {
.menu-item {
flex-direction: column;
align-items: flex-start;
text-align: left;
}
.herp h2 {
font-size: 34px;
}
.price {
align-self: flex-end;
margin-top: 10px;
}

.menu h1 {
font-size: 2rem;
}
}

/_ Gallery Section _/
#gallery {
padding: 60px 0;
background-color: #f8f9fa;
text-align: center;
}

#gallery h2 {
font-size: 2.5rem;
color: #333;
margin-bottom: 30px;
}

.gallery-container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 15px;
padding: 0 20px;
}

.gallery-item {
overflow: hidden;
position: relative;
border-radius: 10px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
transform: scale(1.05);
box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
}

.gallery-item img {
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
}

/_ Services Section _/
#services {
padding: 60px 0;
background-color: #f1f1f1;
text-align: center;
margin-top: 30px;
}

#services h2 {
font-size: 2.5rem;
color: #333;
margin-bottom: 30px;
}

.services-container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
padding: 0 20px;
}

.service-item {
background-color: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
transform: translateY(-10px);
box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
}

.service-image {
width: 100%;
height: 150px;
object-fit: cover;
border-radius: 8px;
margin-bottom: 15px;
}

.service-icon {
font-size: 2.5rem;
color: #f16d31;
margin-bottom: 15px;
}

.service-item h3 {
font-size: 1.5rem;
color: #333;
margin-bottom: 15px;
}

.service-item p {
color: #666;
font-size: 1rem;
line-height: 1.6;
}

/_ Responsive Design _/
@media (max-width: 768px) {
.services-container {
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
}

/_ Responsive Design _/
@media (max-width: 768px) {
.gallery-container {
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
}

/_ Contact Form _/
.contact-us {
display: flex;
align-items: center;
justify-content: center;
padding: 40px;
background-color: #ffffff;
margin-top: 30px;
}

.container {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
max-width: 1200px;
width: 100%;
}

.contact-image img {
width: 100%;
height: auto;
border-radius: 8px;
}

.contact-info {
display: flex;
flex-direction: column;
justify-content: center;
}

.contact-info h2 {
font-size: 2rem;
margin-bottom: 10px;
}

.contact-info p {
margin-bottom: 8px;
}

.reserve-btn {
padding: 10px 20px;
background-color: #ff6347;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
}

.reserve-btn:hover {
background-color: #ff4500;
}

@media (max-width: 768px) {
.container {
grid-template-columns: 1fr;
}
}

/_ Footer _/
footer {
text-align: center;
padding: 20px;
background-color: rgba(0, 0, 0, 0.7);
color: white;
}

/_ Responsive Design _/
@media (max-width: 768px) {
.menu-items,
.gallery-items,
.services {
flex-direction: column;
}

.menu-icon {
display: block;
}

nav ul {
display: none;
flex-direction: column;
background-color: black;
width: 100%;
}

.nav-links.active {
display: flex;
}
}

/_ Keyframes for animations _/
@keyframes fadeInUp {
from {
opacity: 0;
transform: translateY(30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

@keyframes fadeInDown {
from {
opacity: 0;
transform: translateY(-30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sashimi Restaurant</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <div class="logo">Bethi</div>
      <nav>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero" id="home">
      <div id="spa">
        <h1>Welcome to Bethi Restaurant</h1>
        <p>A place where food meets magic✨</p>
        <a href="#menu" class="cta-button">View Menu</a>
      </div>
    </section>

    <section class="about-us" id="about">
      <div class="container">
        <div class="about-image">
          <img
            src="New folder/assets/pexels-adrienn-638530-1537635.jpg"
            alt="Restaurant Image"
          />
        </div>
        <div class="about-info">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Sashimi Restaurant</strong>, where flavor meets
            artistry. Our culinary journey is inspired by traditional recipes
            and modern fusion, bringing you the best dining experience. Every
            dish is crafted with passion, using the freshest ingredients to
            deliver unforgettable taste.
          </p>
          <p>
            Whether you’re here for a romantic dinner or a lively gathering, we
            ensure every moment is filled with delight. Join us and experience a
            culinary journey like no other.
          </p>
          <button class="explore-btn">Explore Menu</button>
        </div>
      </div>
    </section>

    <section id="menu" class="menu">
      <div class="menu">
        <h1>Mnu</h1>
        <div class="menu-item">
          <img
            src="New folder/ivan-torres-MQUqbmszGGM-unsplash.jpg"
            alt="Shashumi 1"
          />

          <div class="item-details">
            <h2>Zyron Orb</h2>
            <p>
              – A spherical tool used for energy harvesting from the
              environment.
            </p>
          </div>
          <span class="price">$45</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-roman-odintsov-5840085.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Velron Scout</h2>
            <p>
              – A quick reconnaissance unit designed for gathering intelligence.
            </p>
          </div>
          <span class="price">$64</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-karolina-grabowska-5718025.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Torrin Blade</h2>
            <p>– A sword forged for battle, known for its unbreakable edge.</p>
          </div>
          <span class="price">$73</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-dana-tentis-118658-262959.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Crystar Shield</h2>
            <p>– A lightweight, indestructible defensive unit.</p>
          </div>
          <span class="price">$65</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-enginakyurt-1437267.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Lumerus Drone</h2>
            <p>– Surveillance drone capable of long-distance travel</p>
          </div>
          <span class="price">$82</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-jill-wellington-1638660-257816.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Magmaron Juggernaut</h2>
            <p>– A heavily armored unit specialized in breaching defenses</p>
          </div>
          <span class="price">$74</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-dana-tentis-118658-691114.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Elios Guard</h2>
            <p>
              – A protective unit programmed for advanced defense maneuvers.
            </p>
          </div>
          <span class="price">$63</span>
        </div>

        <div class="menu-item">
          <img src="New folder/18813.jpg" alt="Shashumi 1" />
          <div class="item-details">
            <h2>Feron Scout</h2>
            <p>– A stealthy tracker used for following enemy movements.</p>
          </div>
          <span class="price">$76</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/jason-leung-O67LZfeyYBk-unsplash.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Xelium Medic</h2>
            <p>– A healing unit, deployed to provide field medical support.</p>
          </div>
          <span class="price">$80</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-janetrangdoan-793785.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Thalor Reaper</h2>
            <p>– A fast-attack unit with twin blades for swift strikes.</p>
          </div>
          <span class="price">$55</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-ella-olsson-572949-1640777.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Pyron Tank</h2>
            <p>
              – A heavily fortified vehicle capable of withstanding extreme
              heat.
            </p>
          </div>
          <span class="price">$65</span>
        </div>

        <div class="menu-item">
          <img
            src="New folder/pexels-janetrangdoan-916904.jpg"
            alt="Shashumi 1"
          />
          <div class="item-details">
            <h2>Zephyr Warden</h2>
            <p>
              – A defensive unit that utilizes wind-like agility to shield
              allies
            </p>
          </div>
          <span class="price">$90</span>
        </div>

        <div class="menu-item">
          <img src="New folder/19631.jpg" alt="Shashumi 2" />
          <div class="item-details">
            <h2>Quantum Snare</h2>
            <p>– A device that traps targets in an unbreakable energy field</p>
          </div>
          <span class="price">$57</span>
        </div>

        <div class="menu-item">
          <img src="New folder/10160.jpg" alt="Shashumi 3" />
          <div class="item-details">
            <h2>Aetheron Strider</h2>
            <p>– A long-range unit built for speed and hit-and-run tactics.</p>
          </div>
          <span class="price">$190</span>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery">
      <section id="gallery">
        <h2>Our Gallery</h2>
        <div class="gallery-container">
          <div class="gallery-item">
            <img src="New folder/1357.jpg" alt="Dish 2" />
          </div>
          <div class="gallery-item">
            <img src="New folder/3920.jpg" alt="Dish 3" />
          </div>
          <div class="gallery-item">
            <img src="New folder/5596.jpg" alt="Dish 4" />
          </div>
          <div class="gallery-item">
            <img src="New folder/2148195547.jpg" alt="Dish 5" />
          </div>
          <div class="gallery-item">
            <img src="New folder/10657.jpg" alt="Dish 6" />
          </div>
          <div class="gallery-item">
            <img src="New folder/pexels-enginakyurt-1437267.jpg" alt="Dish 6" />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/pexels-janetrangdoan-916904.jpg"
              alt="Dish 6"
            />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/pexels-roman-odintsov-5840085.jpg"
              alt="Dish 6"
            />
          </div>
          <div class="gallery-item">
            <img src="New folder/pexels-pixabay-361184.jpg" alt="Dish 6" />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/pexels-karolina-grabowska-5718025.jpg"
              alt="Dish 6"
            />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/pexels-janetrangdoan-916904.jpg"
              alt="Dish 6"
            />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/jason-leung-O67LZfeyYBk-unsplash.jpg"
              alt="Dish 6"
            />
          </div>
          <div class="gallery-item">
            <img
              src="New folder/pexels-karolina-grabowska-5717983.jpg"
              alt="Dish 7"
            />
          </div>
          <div class="gallery-item">
            <img src="New folder/19631.jpg" alt="Dish 8" />
          </div>
          <div class="gallery-item">
            <img src="New folder/11276.jpg" alt="Dish 9" />
          </div>
        </div>
      </section>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <div class="services-container">
        <div class="service-item">
          <img
            src="images/fine-dining.jpg"
            alt="Fine Dining"
            class="service-image"
          />
          <i class="fas fa-utensils service-icon"></i>
          <h3>Fine Dining</h3>
          <p>
            Experience exquisite cuisine with a focus on fresh, seasonal
            ingredients prepared by expert chefs.
          </p>
        </div>
        <div class="service-item">
          <img
            src="images/catering.jpg"
            alt="Catering Service"
            class="service-image"
          />
          <i class="fas fa-glass-cheers service-icon"></i>
          <h3>Catering</h3>
          <p>
            From intimate gatherings to grand events, our catering service
            brings gourmet dishes to your occasion.
          </p>
        </div>
        <div class="service-item">
          <img
            src="images/delivery.jpg"
            alt="Home Delivery"
            class="service-image"
          />
          <i class="fas fa-truck service-icon"></i>
          <h3>Home Delivery</h3>
          <p>
            Get our delicious meals delivered straight to your door. Fast,
            fresh, and always on time!
          </p>
        </div>
        <div class="service-item">
          <img
            src="images/private-events.jpg"
            alt="Private Events"
            class="service-image"
          />
          <i class="fas fa-birthday-cake service-icon"></i>
          <h3>Private Events</h3>
          <p>
            Host your special events with us. From birthdays to weddings, we
            offer a perfect setting for any occasion.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-us" id="contact">
      <div class="container">
        <div class="contact-image">
          <img src="your-image.jpg" alt="Restaurant Image" />
        </div>
        <div class="contact-info">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out for reservations, questions, or feedback.
          </p>
          <div class="contact-details">
            <p><strong>Phone:</strong> +123-456-789</p>
            <p><strong>Email:</strong> contact@restaurant.com</p>
            <p><strong>Address:</strong> 123 Delicious St, Food City</p>
          </div>
          <button class="reserve-btn">Reserve Now</button>
        </div>
      </div>
    </section>

    <footer>
      <p>© 2024 Sashimi Restaurant. All rights reserved.</p>
    </footer>

    <script src="main.js"></script>

  </body>
</html>

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");

menuToggle.addEventListener("click", () => {
mainNav.classList.toggle("main-nav-open");
hamburger.classList.toggle("open");
});
