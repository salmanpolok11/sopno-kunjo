const Exams = () => {
  return (
    <div >
      <section className="md:pt-32 h-[650px] p-3 pt-10">
        <h1 className=" text-center text-4xl font-bold"  >
          সকল <span className=" text-blue-700">পরিক্ষা </span> সমূহ
        </h1>
 
 <div className=" md:flex justify-center md:space-x-10 mt-6 ">
 <div className=" lg:w-80 md:space-y-2 border-2 p-4  rounded-md  mb-5  " >
          <img
            className="  "
            src="https://i.ibb.co/275BF7C/8861545.jpg"
            alt=""
          />
          <h1 className=" font-medium ">
            পরিক্ষার প্রস্তুতি হোক সারা মাস জুড়ে। এইচএসসি মানবিক বিভাগের পাঁচটি
            বিষয়ে সারা মাস পরিক্ষা দেয়ার সুবর্ন সুযোগ। সল্পমূল্যে যাচাই করে নাও
            নিজেকে..
          </h1>
          <button className=" btn btn-outline btn-sm mx-auto w-full">প্রস্তুতি ফ্রি = ৫০০৳ </button>

        </div>
        <div className=" lg:w-80 p-3 md:space-y-2 border-2  rounded-md ">
          <img src="https://i.ibb.co/nPMyDxx/8861625.jpg" alt="" />
          <h1  className=" mt-2 font-medium ">
            পরিক্ষার প্রস্তুতি হোক সারা মাস জুড়ে। এসএসসি মানবিক বিভাগের
            সাতটি বিষয়ে সারা মাস পরিক্ষা দেয়ার সুবর্ন সুযোগ। সল্পমূল্যে যাচাই
            করে নাও নিজেকে..
          </h1>
           <button className=" btn btn-outline btn-sm mx-auto w-full">প্রস্তুতি ফ্রি = ৪০০৳ </button>
        </div>
 </div>

       
      </section>
    </div>
  );
};

export default Exams;
