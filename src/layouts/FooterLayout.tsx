import QRCode from "/qrcode.jpg";
import Appstore from "/appstore.jpg";
import GooglePlay from "/google-play.jpg";

import Facebook from "/facebook.png";
import Twitter from "/twitter.png";
import Instagram from "/instagram.png";
import Linkedin from "/linkedin.png";

const FooterLayout: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <h6>Exclusive</h6>
          <section>
            <p>Subscribe</p>
          </section>
        </div>
        <div>
          <h6>Support</h6>
          <section>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </section>
        </div>
        <div>
          <h6>Account</h6>
          <section>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </section>
        </div>
        <div>
          <h6>Quick Link</h6>
          <section>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </section>
        </div>
        <div>
          <h6>Download App</h6>
          <p>Save $3 with App New User Only</p>
          <div>
            <img src={QRCode} alt="QR code" />
            <div>
              <img src={GooglePlay} alt="QR code" />
              <img src={Appstore} alt="QR code" />
            </div>
          </div>
          <section>
            <img src={Facebook} alt="Fcebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={Linkedin} alt="Linkedin" />
          </section>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;
