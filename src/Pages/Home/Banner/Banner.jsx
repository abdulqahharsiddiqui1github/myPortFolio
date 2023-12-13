const Banner = () => {
  return (
    <div className=" flex items-center justify-center h-screen flex-col lg:flex-row-reverse">
      <div className=" w-3/6 flex justify-center items-center">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className=" rounded-lg shadow-2xl"
        />
      </div>
      <div className="">
        <h1 className="text-5xl w-4/5 ">
          <span className="font-semibold ">hy, It is Me !! </span> <br />
          <span className="font-bold"> siddiqui Abdul Qahhar </span> <small>And I am a developer</small>
        </h1>
        <p className="py-6 w-4/5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
