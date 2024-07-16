import HeaderCSS from '@/../../src/components/header/HeaderJavaCSS'
import MsjPageBuilding from "@/../../src/components/tracingBeam/TracingBeamDemoPageBuil";

export default async function Effects() {

   
  return (
          
      <div>
        <HeaderCSS/>
          <div style={{height:'12vh'}}></div>
          <h3>Learn about Effects and transitions in CSS!</h3>
        <MsjPageBuilding/>
    </div>
  );
}