import { supabase } from '@/../utils/supabase.js'
import HeaderJS from "@/components/header/HeaderJavaScript.jsx"
import TracingBeamBodyArticle from "@/components/tracingBeam/TracingBeamBodyArticle";
import '@/app/globals.css'
export default async function Events() {
 
  let news = [
    {
      title: '',
      body: '',
      badge:'',
      img_url:'',
      img_alt:'',
      keywords:'',
    }
  ];

  try {
    const { data:news1 , error } = await supabase.from("articleJS_events").select('*')
 

    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (

      <main>
        <HeaderJS/>
        <div style={{height:'4vh'}}></div>
        
         {
            news
             ? <div div className="view-sections sm:text-xs sm:text-[0.3rem] md:text-base md:text-sm lg:text-lg lg:text-[0.8rem]">
                <TracingBeamBodyArticle news={news}/>
              </div>
            : <div>No data!</div>
        }
      </main>
  );
}