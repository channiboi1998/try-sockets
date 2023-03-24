import LoginForm from "./login-form";

const Login = () => {
  return (
    <main className="relative min-h-screen flex-auto">
      <div className="w-full h-[100vh] bg-ice">
        <div className="flex flex-col justify-center items-center mx-auto max-w-[1024px] h-full md:flex-row md:justify-between">
          {/* Login Page Title */}
          <div className="text-center w-full max-w-[550px]">
            <img
              src="images/brand/gw-delivery-full-logo.png"
              alt="Greenwhich Delivery"
              className="w-full max-w-[120px] m-auto mb-5 md:mx-0 md:mb-10 md:max-w-[301px]"
            />
            <h1 className="text-evergreen text-center font-semibold text-xl leading-tight mb-5 md:text-left md:max-w-[437px] md:text-[52px] md:mb-0">
              Voyager Order Manager
            </h1>
          </div>
          {/* Login Form */}
          <div className="w-[90%] max-w-[470px] p-10 shadow-lg rounded-lg bg-white md:w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
