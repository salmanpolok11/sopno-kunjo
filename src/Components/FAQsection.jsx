
const FAQsection = () => {
  return (
    <div className=" mt-10 md:mt-20">
      
      {/*  FAQ SECTION */}
  <h1 className=" text-center text-2xl md:text-4xl font-bold p-3">
  আমাদের নিয়ে  <span className=" text-blue-700">আপনার  </span> জিজ্ঞাসা🔥
</h1>
<section className=" md:flex justify-center gap-20 p-3 md:w-[1000px] mx-auto  ">
<div className=" space-y-4 mt-3">

<div className="collapse collapse-plus bg-base-200">
<input type="radio" name="my-accordion-3" defaultChecked /> 
<div className="collapse-title text-2xl  font-semibold">
পরিক্ষা কখন করে হবে?
</div>
<div className="collapse-content"> 
<p>সাধারণত পাবলিক পরিক্ষাগুলো ১০/১১টার মধ্যে হয়ে থাকে। এ কারণে আমরাও এই সময়টাই বেঁচে নিয়েছি।  
যাথে একজন সাধারণ শিক্ষার্থী  এই সময়টায় পরিক্ষা দিতে দিতে তার মস্তিষ্ককে আগে থেকে অভ্যস্থ করে রাখতে পারে।  </p>
</div>
</div>

<div className="collapse collapse-plus bg-base-200">
<input type="radio" name="my-accordion-3" /> 
<div className="collapse-title text-xl font-semibold">
পরিক্ষাগুলোতে কয়টা প্রশ্ন থাকবে? 
</div>
<div className="collapse-content"> 
<p>বোর্ড প্রশ্নের মতো করে সাজানো থাকবে।  এসএসসি, এইচএসি,  জন্য  থাকবে ৩০টা করে প্রশ্ন ।  
এডমিশন পরিক্ষার্থীদের জন্য ১০০টা(ঢাবি, জাবি, রাবি, চবি) এর অনুরূপ ।  </p>
</div>
</div>


<div className="collapse collapse-plus bg-base-200">
<input type="radio" name="my-accordion-3" /> 
<div className="collapse-title text-xl font-semibold">
পরিক্ষা কতদিন চলবে?
</div>
<div className="collapse-content"> 
<p>পরিক্ষা চলবে একমাস ব্যপী।  শুক্রবার ছাড়া সপ্তাহে ছয়দিন পরিক্ষা হবে।  </p>
</div>
</div>

<div className="collapse collapse-plus bg-base-200">
<input type="radio" name="my-accordion-3" /> 
<div className="collapse-title text-xl font-semibold">
মোট কয়টা পরিক্ষা হবে? 
</div>
<div className="collapse-content"> 
<p>মোট পরিক্ষা হবে ৩০টি।   </p>
</div>
</div>

</div>
</section>

    </div>
  );
};

export default FAQsection;