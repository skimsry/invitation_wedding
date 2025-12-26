import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import bgwelcome from "../assets/bgwelcome_temple.webp";
import bgwelcomeMobile from "../assets/mobile_bg.png";
import ring from "../assets/ring.png";
import Bubbles from "../components/Bubbles";
import Typewriter from "../components/Typewriter";

export default function Welcome() {
  const API_URL = process.env.REACT_APP_API_URL;
  const { code } = useParams(); 
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
  if (!code) return; // don’t fetch if code is undefined

  setLoading(true);

  fetch(`${API_URL}/api/person/${code}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Not found");
      }
      return res.json();
    })
    .then((data) => {
      setPerson(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setPerson(null);
      setLoading(false);
    });

  // Save code to localStorage
  localStorage.setItem("inviteCode", code);

}, [code]); // API_URL doesn’t need to be here

// const handleSaveToLocal = () => {
//   const path = window.location.pathname; 
//   const inviteCode = path.split('/').pop(); 

//   if (inviteCode) {
//     localStorage.setItem("inviteCode", inviteCode);
//     console.log("Extracted and saved:", inviteCode);
//   }
// };

  if (loading) return (<div className="text-center pt-16">
  <div role="status">
    <svg
      aria-hidden="true"
      className="inline w-8 h-8 animate-spin text-gray-300 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
</div>
);
  if (!person) return  (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">
            404
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Page not found
          </p>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
              Please contact support : 016 571 913/071 879 4559
            </span>
          </div>
        </div>

      </div>
    </div>
  );



  return (
    <div
      className="
        relative w-full min-h-[100dvh]
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center
        text-center p-6 sm:p-12
        animate-fadeIn overflow-auto
      "
      style={{
        "--bg-mobile": `url(${bgwelcomeMobile})`,
        "--bg-desktop": `url(${bgwelcome})`,
      }}
    >
    
      
      <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2> */}
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
</h2>

        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-1 leading-tight font-moulpali">
          គឹមស្រ៊ី
        </h1>
        <img
          src={ring}
          alt="ring"
          className="animate-fade-in-up hover:scale-105 w-24 h-24 mb-1"
        />
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-8 leading-tight font-moulpali">
          សុធារ័ត្ឋ
        </h1>
        <p className="
  animate-fade-in-up
  text-xl sm:text-2lg md:text-2xl
  text-yellow-300
  mb-4 px-4 leading-relaxed
  font-kangrey
  sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  sm:[-webkit-text-stroke:.1px_#000000]
">
  សូមគោរពអញ្ជើញ
</p>

        
        
        {/* <h2 className="sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-yellow-400 mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
          <Typewriter text="លោក វរសេនីយ៍ត្រី សន គឹមស្រ៊ី" speed={90} delay={800} />
        </h2> */}


        <h2 className="sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-yellow-400 mb-4 lg:mb-2 md:mb-2 leading-tight font-kh">
          <Typewriter text={person.name} speed={90} delay={800} />
        </h2>
<h2 className="sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-yellow-400 mb-8 lg:mb-8 md:mb-8 leading-tight font-kh">
          <Typewriter text={person.adname} speed={90} delay={800} />
        </h2>
        <Link
  to="/welcomespouse"
  // onClick={handleSaveToLocal}
  className="
    px-8 py-3 
    bg-lime-950 text-yellow-400
    text-sm sm:text-base font-bold uppercase tracking-wider
    rounded-full shadow-xl 
    hover:scale-105 hover:bg-lime-900 hover:shadow-2xl 
    transition-all duration-300 ease-out font-moulpali animate-bounce
    inline-flex items-center gap-2
  "
>
  <span>បើកសំបុត្រអញ្ជើញ</span>
  <svg
    fill="#facc15"
    height="28px"
    width="28px"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    strokeLinecap="round"
    strokeLinejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M32.9,110c0,0,0-3.3,0-3.8h47.5c-0.7,1.4-1.2,3-1.5,4.5c-0.4,2.1-0.2,4.1,0.3,6l-39.7-0.1C35.8,116.6,32.9,113.6,32.9,110 M85.4,24.4c0,6.8-0.1,67-0.1,73.8H39.9l28.4-23.8l-0.1-50.1C70.8,24.4,82.9,24.4,85.4,24.4 M89.8,116.7h-1.9 c-1.1-1.2-1.5-2.8-1.2-4.7c0.5-3.1,2.8-5.7,3.9-6.1l0,0c1.5-0.5,2.7-2,2.7-3.7l0.1-81.8c0-2.2-1.8-4-4-4c0,0-16.5,0-21.1,0 c0-3.9,0-9.2,0-9.2c0-1.6-0.9-3.1-2.4-3.7c-1.5-0.6-3.2-0.3-4.3,0.8L33.8,31.9c-4.9,4.8-8.7,14-8.7,20.8L24.9,110 c0,8,6.5,14.6,14.5,14.6l50.3,0.2c2.2,0,4-1.8,4-4v0C93.7,118.5,92,116.8,89.8,116.7" />
  </g>
  </svg>
</Link>

      </div>
    </div>
  );
}

//add invitation name
// import { useState, useEffect } from 'react';

// export default function Welcome() {
//   const [items, setItems] = useState([]);
//   const [formData, setFormData] = useState({ code: '', name: '', adname: '' });

//   // 1. Fetch existing items from MongoDB on load
//   const fetchItems = async () => {
//     const response = await fetch('http://localhost:5000/api/items');
//     const data = await response.json();
//     setItems(data);
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // 2. Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     await fetch('http://localhost:5000/api/items', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     setFormData({ code: '', name: '', adname: '' }); // Clear form
//     fetchItems(); // Refresh list
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Add Invitation Name</h1>

//       {/* Form Section */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//         <input 
//           type="text" 
//           placeholder="Code" 
//           value={formData.code}
//           onChange={(e) => setFormData({...formData, code: e.target.value})}
//           required 
//         />
//         <input 
//           type="text" 
//           placeholder="name" 
//           value={formData.name}
//           onChange={(e) => setFormData({...formData, name: e.target.value})}
//           required 
//         />
//         <input 
//           type="text" 
//           placeholder="adname" 
//           value={formData.adname}
//           onChange={(e) => setFormData({...formData, adname: e.target.value})}
//           required 
//         />
//         <button type="submit">Add to MongoDB</button>
//       </form>

//       <hr />

//       {/* List Section */}
//       <h2>Saved Items:</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             <strong>{item.code}:</strong> {item.name} {item.adname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }