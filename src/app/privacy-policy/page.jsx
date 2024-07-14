import Header from '@/../../src/components/header/HeaderHome'
import TracingBeamDemoBanner from "@/../../src/components/tracingBeam/TracingBeanDemoBanner";


const dummyContent = [
  {
    title: "PRIVACY POLICY.",
    description: (
      <div className="conte-bean">
        <p>Our website address is: https://learning-js-ten.vercel.app/</p>

        <h3>Comment Policy</h3>
        <p>This website offers users the ability to read current information. Users cannot insert, write, update, or delete data, personal information, or comments. The website does not allow comments on displayed information. It is for reading only, and no user information, including personal information, is required as there are no forms.</p>

        <h3>Cookies</h3>
        <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie does not contain any personal data and is discarded when you close your browser.</p>

        <h3>Embedded Content from Other Websites</h3>
        <p>Articles on this site may include embedded content from other websites (e.g., videos, images, articles). This embedded content behaves in the same way as if the visitor had visited the other website.</p>
        <p style={{color:'#107878'}}>
            <li>These websites may collect data about you.</li>
            <li>They may use cookies.</li>
            <li>They may embed additional tracking by third parties.</li>
            <li>They may monitor your interaction with the embedded content, including if you have an account and are logged in on that website.</li>
        </p>   
      </div>
    ),
    badge: "👮🏼",
  },
  
];
export default async function PrivacyPolicy() {

  return (
          
        <div>
          <Header/>
            <div style={{height:'12vh'}}></div>
          <TracingBeamDemoBanner dummyContent={dummyContent}/>
      </div>
  );
}