const Bannar = () => {
  return (
    <div>
      <section className=" md:flex justify-center items-center space-x-10 mt-32">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h1 className=" font-semibold text-4xl text-center">
          “স্বপ্ন দেখ বিজয়ের, <br /> সাধনা করো{" "}
            <span className=" text-blue-700">শ্রেষ্ঠত্বের। </span>{" "}
          </h1>
        </div>

        <div
         data-aos="fade-left"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine">
          <img
            src="https://i.ibb.co/cJw9q0Q/3966983-removebg-preview.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Bannar;
