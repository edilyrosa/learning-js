import Header from '@/../../src/components/header/HeaderHome'
import TracingBeamDemoBanner from "@/../../src/components/tracingBeam/TracingBeanDemoBanner";
import Link from 'next/link';


const dummyContent = [
  {
    title: "LEGAL NOTICE",
    description: (
      <div className="conte-bean">
        <p>This document is made available to users by Mora Dev, the creator of content for the official website <Link href="https://learnseo.vercel.app/" style={{color:"blue"}}> <i> https://learning-js-ten.vercel.app/</i></Link> (hereinafter referred to as the Website).</p>

        <h3>Purpose</h3>
        <p>This document aims to fulfill the obligations set forth in Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), the General Data Protection Regulation (GDPR), and to inform all users of the Website about the terms of use. By accessing this Website, you assume the role of the user and commit to observing and strictly complying with the provisions herein, as well as any other legal provision that may apply.</p>

        <h3>Right to Modify Information</h3>
        <p>Mora Dev reserves the right to modify any type of information that may appear on the website, without being obliged to give prior notice or inform the users.</p>

        <h3>Content Access and Limitations</h3>
        <p>Through the Website, we offer users the possibility of reading current information without the ability to insert, write, update, or delete the displayed data, personal information, or comments. The Website does not provide an option for comments on displayed information. It is for reading only, and no information is required from the user, including personal information, as there are no forms.</p>

        <h3>Privacy and Data Processing</h3>
        <p>The Website is for reading only, and no information is required from the user, including personal information, as there are no forms. However, if the Website were to obtain data from the user, it would give those data the automated treatment that corresponds to their nature or purpose, in accordance with the terms indicated in a separate Privacy Policy. The user can access the policy followed in the processing of personal data, as well as the establishment of the previously established purposes, in the conditions defined in the Privacy Policy.</p>

        <h3>Intellectual Property Rights</h3>
        <p>You acknowledge and accept that all content shown on the Website, including designs, texts, images, logos, icons, buttons, software, commercial names, trademarks, or any other signs susceptible of industrial and/or commercial use, are subject to intellectual property rights. All industrial and intellectual property rights over the contents and/or any other elements on the Website are the exclusive property of the company and/or third parties, who have the exclusive right to use them commercially. Therefore, you commit not to reproduce, copy, distribute, make available to the public, transform, or modify the contents unless you have the authorization of the holder of the corresponding rights or it is legally permitted.</p>

        <h3>User Obligations and Responsibilities</h3>
        <h3>Proper Use</h3>
        <p>By using the Website and its contents, you agree to:</p>
        <p>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Abide by these Terms of Use.</li>
            <li>Act in accordance with general moral and good customs.</li>
            <li>Maintain public order.</li>
        </p>
        <h3>Obtaining Necessary Means</h3>
        <p>You are also responsible for obtaining all the necessary means and requirements to access the Website.</p>

        <h3>Prohibited Actions</h3>
        <p>In addition to the above, you must also refrain from:</p>
        <p>
            <li>Reproducing, copying, distributing, or modifying the content without authorization.</li>
            <li>Suppressing or manipulating intellectual property rights notices.</li>
            <li>Transmitting or making available any information that is:</li>
                <ul>
                    <li>Contrary to fundamental rights and public liberties.</li>
                    <li>Criminal, violent, or defamatory.</li>
                    <li>Harmful to public order or good morals.</li>
                    <li>Protected by intellectual property laws without authorization.</li>
                </ul>
        </p>

        <h3 style={{color:'#007878'}}>External Links</h3>
        <p style={{color:'#007878'}}>The Website may provide links to other websites and content owned by third parties. Mora Dev assumes no responsibility for the results of accessing these links.</p>

        <h3 style={{color:'#007878'}}>Cookies</h3>
        <p style={{color:'#007878'}}>The Website reserves the right to use cookies to recognize frequent users and personalize their experience by pre-selecting language or desired content. Cookies collect the users IP address, with Google being responsible for processing this information.</p>
              
      </div>
    ),
    badge: "⚖️",
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