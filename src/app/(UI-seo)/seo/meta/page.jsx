import HeaderSEO from '@/../../src/components/header/HeaderSEO.jsx'
import MsjPageBuilding from "@/../../src/components/tracingBeam/TracingBeamDemoPageBuil";

export default async function Meta() {

   
  return (
          
      <div>
        <HeaderSEO/>
          <div style={{height:'12vh'}}></div>
        <MsjPageBuilding/>
    </div>
  );
}