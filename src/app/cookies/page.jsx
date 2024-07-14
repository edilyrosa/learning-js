import Header from '@/../../src/components/header/HeaderHome'
import TracingBeamDemoBanner from "@/../../src/components/tracingBeam/TracingBeanDemoBanner";


const dummyContent = [
  {
    title: "WHAT IS A COOKIE?",
    description: (
      <div className="conte-bean">
      <p>Cookies are small files that websites transfer to your computer to store information about your preferences. These files can improve your browsing experience by allowing websites to remember your preferences or avoid asking you to log in each time you visit certain sites. However, some cookies can pose a risk to your privacy by tracking the sites you visit.</p>

      <br/>
      <br/>
      <h3>Types of Cookies</h3>
      <p>This website uses cookies to offer a better user experience, obtain analytical data, store and retrieve information about your browsing habits or device, and develop its activity. The types of cookies used include:</p>
      <p>
        <li><strong>Technical Cookies:</strong> These cookies allow users to navigate through a website, platform, or application and use the different options or services available, such as controlling traffic and communication of data, identifying sessions, accessing restricted areas, remembering elements that make up a purchase, and more.</li>
        <li><strong>Personalization Cookies:</strong> These cookies allow users to access the service with some general characteristics predefined based on a series of criteria in the user terminal, such as language, browser type, regional configuration, and more.</li>
        <li><strong>Analysis Cookies:</strong> These cookies, either treated by us or by third parties, allow us to quantify the number of users and perform statistical analysis of the usage of the service offered. This involves analyzing your navigation on our website to improve the offer of products or services we provide.</li>
        <li><strong>Advertising Cookies:</strong> These cookies, either treated by us or by third parties, allow us to manage the advertising spaces on the website, adapting the content of the ad to the content of the service requested or the use you make of our website. For this, we can analyze your browsing habits on the Internet and show you related advertising based on your profile.</li>
        <li><strong>Behavioral Advertising Cookies:</strong> These cookies allow the management of advertising spaces, in case the editor has included them in a website, application, or platform from which the service is provided. These cookies store information about the users behavior obtained through continuous observation of their browsing habits, allowing the development of a specific profile to show advertising based on it.</li>
        <li><strong>Third-Party Cookies:</strong> This website may use services from third parties that, on behalf of Google, collect information for statistical purposes, usage of the site by the user, and for the provision of other services related to the activity of the site and other Internet services.</li>
      </p>
      <br/>
      <br/>
      <h3>Managing and Rejecting the Use of Cookies</h3>
      <p style={{color:'#007878'}}>At any time, you can adapt the browser settings to manage, reject the use of cookies, and be notified before they are downloaded. You can also adapt the settings so that the browser rejects all cookies, or only third-party cookies. Additionally, you can eliminate any cookies that are already on your device. Keep in mind that you will need to adapt the settings separately for each browser and device you use, as cookies are associated with the browser, not the person.</p>
            
      </div>
    ),
    badge: "🍪",
  },
  
];

export default async function Cookies() {

   
  return (
          
        <div>
          <Header/>
            <div style={{height:'12vh'}}></div>
            <TracingBeamDemoBanner dummyContent={dummyContent}/>
      </div>
  );
}