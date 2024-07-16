import HeaderSEO from '@/../../src/components/header/HeaderSEO.jsx'
import MsjPageBuilding from "@/../../src/components/tracingBeam/TracingBeamDemoPageBuil";

export default async function Sitemap() {

   
  return (
          
      <div>
        <HeaderSEO/>
          <div style={{height:'12vh'}}></div>
          <h3>Learn about sitemap.xml, robot.txt, crawled and indexing of pages!</h3>
        <MsjPageBuilding/>
    </div>
  );
}