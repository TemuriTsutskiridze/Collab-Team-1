import ProductImage from "/package.jpg";

const SignIn: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <img src={ProductImage} alt="Product image" />
        </div>
        <div>
          <h4>Log in to Exclusive</h4>
          <p>Enter your details below</p>
          <form>
            <input type="email" />
            <input type="password" />
            <div>
              <button type="submit">Log In</button>
              <span>Forget Password?</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
