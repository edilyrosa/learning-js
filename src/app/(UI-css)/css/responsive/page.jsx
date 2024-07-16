import HeaderCSS from '@/../../src/components/header/HeaderJavaCSS'
import MsjPageBuilding from "@/../../src/components/tracingBeam/TracingBeamDemoPageBuil";

export default async function Responsive() {

   
  return (
          
      <div>
        <HeaderCSS/>
          <div style={{height:'12vh'}}></div>
          <h3>Learn about Responsive UI!</h3>
        <MsjPageBuilding/>
    </div>
  );
}