import HeaderSEO from '@/components/header/HeaderSEO'
import TracingBeanSEO from "@/components/tracingBeam/TracingBeamDemoSEO"

export default async function Seo() {

   
  return (
          
      <div>
        <HeaderSEO/>
          <div style={{height:'12vh'}}></div>
        <TracingBeanSEO/>
    </div>
  );
}
