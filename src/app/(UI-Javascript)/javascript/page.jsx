import TracingBeamDemo from '@/components/tracingBeam/TracingBeamDemo'
import HeaderJavaScript from '@/components/header/HeaderJavaScript.jsx'

export default async function JavaScriptHome() {


  return (
            <main>
             <HeaderJavaScript/>
             <div style={{height:'12vh'}}></div>
             <h2>WHY LEARN JAVASCRIPT?</h2>
              <TracingBeamDemo/>
            </main>
  );
}

