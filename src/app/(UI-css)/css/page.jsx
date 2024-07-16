import HeaderCSS from '@/../../src/components/header/HeaderJavaCSS'
import TracingBeamDemoBanner from "@/../../src/components/tracingBeam/TracingBeanDemoBanner";
import '@/app/globals.css'



const dummyContent = [
  {
    title: "Importance of Learning CSS for Attractive, Responsive, and Enjoyable Web Pages",
    description: (
      <>
      <br/>
        <p>
        In this digital age, having a visually appealing and user-friendly website is crucial 
        for any business or individual looking to establish an online presence. One of the key 
        elements in achieving this is the mastery of Cascading Style Sheets (CSS). CSS is a 
        fundamental technology for web development, allowing developers to control the layout, 
        appearance, and behavior of web pages. Its importance cannot be overstated, as it plays 
        a vital role in creating a seamless user experience across various devices and browsers.
        </p>
        
      <br/>
        <p >
        CSS is essential for several reasons. Firstly, it enhances the aesthetic appeal of a website 
        by providing a wide range of styling options, from colors and fonts to backgrounds and layouts. 
        This not only makes the website more visually appealing but also helps to establish a brand 
        identity. Secondly, CSS is critical for responsive web design, which ensures that a website 
        adapts to different screen sizes and devices, providing an optimal user experience regardless 
        of how users access the site. This is particularly important in this mobile-first world, 
        where the majority of internet users access websites through their mobile devices.
        </p>
        <br/>
        <p>
        To simplify the process of creating responsive and attractive web pages, developers often 
        rely on CSS frameworks. These frameworks provide pre-built, reusable code for common design 
        elements and components, such as grids, forms, and buttons. 
        </p>
        <br/>
        <p style={{color:'#007878'}}>
        This saves time and effort, 
        allowing developers to focus on more complex aspects of web development. Some of the most 
        popular CSS frameworks currently in use include: Bulma, Bootstrap, Tailwind CSS, among others.
        </p>
        <br/>    
        <br/>
      </>
    ),
    badge: "Amazing CSS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/learnSEO%2Fcss.gif?alt=media&token=cfab15fb-3e3a-435a-bd05-df3c2394dffb",
  },
  
];


export default async function JavaScriptHome() {

  return (

            <div>
             <HeaderCSS/>
             <div style={{height:'12vh'}}></div>
             <h2>Lean CSS!</h2>
             <TracingBeamDemoBanner dummyContent={dummyContent}/>
            </div>
  );
}
