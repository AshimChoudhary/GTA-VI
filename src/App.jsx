import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-teal-500">Welcome to the World of GSAP</h1>
      </div>
    </main>
  );
};
export default App;
