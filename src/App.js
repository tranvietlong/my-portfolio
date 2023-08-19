import Main from './components/Main';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';

function App() {

  return (
    <BackgroundView>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500'>
        <Navbar />
        <Main />
        <Projects />
        <Experiences />
        <div className="flex mt-20 justify-center items-center font-[350] text-[0.6rem] leading-loose sm:text-[1rem]  tm:text-[1rem]">
        Copyright © 2023
        <span className="font-[500]">&nbsp;Tran Viet Long&nbsp; </span>
        All Rights Reserved
      </div>
      </div>
      
    </BackgroundView>
  )
}

export default App