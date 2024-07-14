import Header from '@/../../src/components/header/HeaderHome'
import TracingBeamDemoBanner from "@/../../src/components/tracingBeam/TracingBeanDemoBanner";
import '@/app/globals.css'
const dummyContent = [
  {
    title: "ABOUT ME",
    description: (
      <div className="conte-bean">
      <h3>Hi there! I am Edily Mora</h3>
      <p>
        I wear many hats! I am a Lawyer and a Front-end Web Developer with a passion for SEO, UX and UI. JavaScript is my programming language of choice, and I love building beautiful web applications using Next.js and Node.js.
      </p>
      <p>
        Beyond the world of code, I am also interested in fashion, entertainment, and healthy living. This passion fuels my creativity, and I enjoy creating content related to these topics.
      </p>
      <p>
        Feel free to reach out if you would like to connect! You can email me at: <a href="mailto:edilyrosa@gmail.com" style={{color:"blue"}}><i>edilyrosa@gmail.com</i></a>
      </p>
      <h3 style={{color:'#007878'}}>What https://learning-js-ten.vercel.app/ ?</h3>
      <br/>
      <p style={{color:'#007878'}}>
        Is a website dedicated to learn JavaScript, SEO and CSS.
      </p>
      
      </div>
    ),
    badge: "👩🏼‍💻",
  },
  
];




export default async function AboutMe() {

   
  return (
          
        <div>
          <Header/>
            <div style={{height:'12vh'}}></div>
            <TracingBeamDemoBanner dummyContent={dummyContent}/>
      </div>
  );
}