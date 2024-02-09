const Card = () => {
  return (
    <div className=" p-3 text-center mt-10 md:mt-20 ">
        <h1 className=" text-center text-2xl md:text-4xl font-bold">
        চিরন্তন  <span className=" text-blue-700"> বাণী  </span> সমূহ 
        </h1>
      <section className=" md:mt-10">
        <div className=" md:flex items-center justify-center">
          <img
            src="https://i.ibb.co/xMPzmp4/10026547-removebg-preview.png"
            alt=""
          />
          <h1 className=" text-xl md:text-2xl md:w-[600px] ">
          জীবনে বড় কিছু হতে হলে আমাদের সবকিছুতেই পরীক্ষা দিতে হয়। <br />
একটা পরীক্ষা কখনোই তুমি কেমন মানুষ সেটা তোমাকে বিচার করার জন্য যথেষ্ট না, তোমার তোমার ঐ একটা পরীক্ষার ফল তোমার ভবিষ্যত বাণী করে দিতে পারে না।
          </h1>
        </div>

        <div className=" md:flex items-center justify-center flex-col md:flex-row-reverse">
          <img
            src="https://i.ibb.co/MBpTMzP/10014544-removebg-preview.png"
            alt=""
          />
          <h1 className=" text-xl md:text-2xl">
            যদি তুমি কোনো মানুষের ক্ষমতা পরীক্ষা করতে চাও, <br />
            তবে তাকে ক্ষমতা দাও।
            <br /> — আব্রাহাম লিংকন
          </h1>
        </div>

        <div className=" md:flex items-center justify-center ">
          <img
            src="https://i.ibb.co/SNJYL3t/10014469-removebg-preview.png"
            alt=""
          />
          <h1 className="  text-xl md:text-2xl">
          কখনো কোনো পরীক্ষায় ব্যর্থ হয়েছো বলে এটা ভেবে নিও না <br /> যে সব শেষ হয়ে গেছে, বরং এটা মনে করো <br /> যে তোমার সফলতার সময়টা একটু পিছিয়ে দেয়া হয়েছে।
          </h1>
        </div>

        <div className=" md:flex items-center justify-center flex-col md:flex-row-reverse">
          <img
            src="https://i.ibb.co/D59KMbc/6718139-removebg-preview.png"
            alt=""
          />
          <h1 className="  text-xl md:text-2xl">
          পরীক্ষার শেষ ৫ মিনিটে যেন সকলের কাছেই <br /> এক অন্যরকম শক্তি চলে আসে,  <br /> মনে হয় যেন ঐ ৫ টা মিনিট সবথেকে মূল্যবান সময়।
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Card;
