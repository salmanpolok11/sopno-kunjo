import { MdReadMore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HSCdeatils = () => {
  return (
    <div className="pt-24 p-3 px-5 bg-[#FFFEFE] ">
       {/* 1s section  */}
        <section className=" md:flex justify-center items-center md:w-[1000px] mx-auto">
        <h1 className=" md:text-xl md:mt-40">প্রিয় শিক্ষার্থী,  <br />
পাবলিক পরিক্ষা একটা ভিতির নাম।  পূর্নাঙ্গ প্রস্তুতি থাকা সত্ত্বেও অনেকে পরিক্ষা দিতে অভ্যস্থ না হওয়ায় পরিক্ষা কেন্দ্রে ঘাবড়ে যায়।  যার ফলে ভেঙে যায় অনেক স্বপ্ন ।  তাই আমরা একজন পরিক্ষার্থীর যেন পরিক্ষা বিষয় কোন ভিতি না থাকে সে জন্য সারা মাস পরিক্ষা দেয়ার ব্যবস্থা করেছি। </h1>
           <img
         className=" md:h-96"
         src="https://i.ibb.co/5MxfBtD/image-processing20220502-26976-1mna6ik.gif" alt="" />
        </section>

        <section>
            <h1 className=" md:w-[1000px] mx-auto">
সাধারণত পাবলিক পরিক্ষাগুলো ১০/১১টার মধ্যে হয়ে থাকে। এ কারণে আমরাও এই সময়টাই বেঁচে নিয়েছি।  
যাতে  একজন সাধারণ শিক্ষার্থী  এই সময়টায় পরিক্ষা দিতে দিতে তার মস্তিষ্ককে আগে থেকে অভ্যস্থ করে রাখতে পারে। <br/>
মানুষ অভ্যাসে দাস৷ এই অভ্যেস গড়ে দেব আমরা। এ সময়ে রোজ পরিক্ষা দেয়ার অভ্যেস করলে যেকোন পাবলিক পরিক্ষা কেন্দ্র ঐ সময় মস্তিষ্ক অটোমেটিক বুঝে যাবে যে তার এখন পরিক্ষা দেয়ার সময় হয়েছে ৷ তখন ব্রেইন সর্বোচ্চ আউটপুট দিতে সহযোগিতা করবে।  
 <br/> <br />
নাম মাত্র মূল্যে এমন সুবিধা পেতে এখনি এনরোল করে ফেলুন আপনার প্রয়োজনীয় পরিক্ষাটি এবং এগিয়ে 
যান স্বপ্নের শীর্ষে।   <br />
            </h1>

        </section>

        <div className=" md:w-1/8 w-32 mx-auto mt-7">
             <NavLink to="/" className=' '>
                   <button className=" btn btn-outline btn-sm bg-blue-700 text-white ">
                    <MdReadMore /> এনরোল{" "}
                    </button>
                </NavLink>
        </div>

    </div>
  );
};

export default HSCdeatils;