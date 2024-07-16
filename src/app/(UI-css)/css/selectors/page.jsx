import HeaderCSS from '@/../../src/components/header/HeaderJavaCSS'
import MsjPageBuilding from "@/../../src/components/tracingBeam/TracingBeamDemoPageBuil";

export default async function Selectors() {

   
  return (
          
      <div>
        <HeaderCSS/>
          <div style={{height:'12vh'}}></div>
          <h3>Learn about Valid CSS Selectors!</h3>
        <MsjPageBuilding/>
    </div>
  );
}