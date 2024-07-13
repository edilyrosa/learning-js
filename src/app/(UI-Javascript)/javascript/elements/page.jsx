import { supabase } from '@/../utils/supabase.js'
import HeaderJS from "@/components/header/HeaderJavaScript.jsx"
import TracingBeamBodyArticle from "@/components/tracingBeam/TracingBeamBodyArticle";
import '@/app/globals.css'
export default async function Elements() {
 
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
    const { data:news1 , error } = await supabase.from("articleJS_elementsHTML").select('*')
 

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
             ? <div className="view-sections">
                <TracingBeamBodyArticle news={news}/>
              </div>
            : <div>No data!</div>
        }
      </main>
  );
}