import {NameHeader} from "./components/NameHeader.jsx";
import {WorkExperience} from "./components/WorkExperience.jsx";
import {Skills} from "./components/Skills.jsx";

function App() {

  return (
    <>
      <NameHeader />
      <div className='w-full my-4 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <WorkExperience/>
        <Skills/>
      </div>
    </>
  )
}

export default App
