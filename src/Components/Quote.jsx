const Quote = () => {
  return (
    <div className=" mt-10 md:mt-20 w-full md:h-80  bg-blue-700">
      <section className="md:flex justify-center flex-col md:flex-row-reverse">
      <div>
          <img
            className=" md:mt-5 "
            src="https://i.ibb.co/jGzFC9F/41928-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <h1 className=" md:pt-28 text-white  text-xl md:text-2xl  text-center pb-5  p-3">
            নিজের উপর বিশ্বাস করো। <br /> সবসময় এটা মনে রাখো যে তোমার মধ্যে এমন
            অনেক জ্ঞান আছে, <br /> যা যেকোনো পরীক্ষায় লিখে আসা উত্তর থেকে
            উচ্চতর।
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Quote;
