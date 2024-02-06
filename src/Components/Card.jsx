const Card = () => {
  return (
    <div className=" p-3 text-center">
      <section>
        <div className=" md:flex items-center justify-center">
          <img
            src="https://i.ibb.co/xMPzmp4/10026547-removebg-preview.png"
            alt=""
          />
          <h1 className=" text-2xl">
            কখনো কোনো পরীক্ষায় ব্যর্থ হয়েছো বলে এটা ভেবে নিও না, <br /> যে সব শেষ হয়ে
            গেছে, বরং এটা মনে করো- <br /> যে তোমার সফলতার সময়টা একটু পিছিয়ে দেয়া
            হয়েছে।
          </h1>
        </div>

        <div className=" md:flex items-center justify-center flex-col md:flex-row-reverse">
        <img 
            src="https://i.ibb.co/MBpTMzP/10014544-removebg-preview.png"
            alt=""/>
          <h1 className=" text-2xl">
            যদি তুমি কোনো মানুষের ক্ষমতা পরীক্ষা করতে চাও, <br />
            তবে তাকে ক্ষমতা দাও।
            <br /> — আব্রাহাম লিংকন
          </h1>
         
        </div>
      </section>
    </div>
  );
};

export default Card;
