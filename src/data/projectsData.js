import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import jetbot from "./../assets/portfolioImages/jetbot.png";
import Pizza from "./../assets/portfolioImages/pizaa.jpeg";

// in progress projects

import Servista from "./../assets/portfolioImages/mockup.jpg";
import textRecognition from "./../assets/portfolioImages/textRecognition.png";
import hospital from "./../assets/portfolioImages/hospital.avif";
import landingPage from "./../assets/portfolioImages/url.jpg";

const ProjectsData = [
  {
    id: "travel-planner",
    img: Servista,
    name: "Travel Planner App",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< NextJS />"],
    live: "false",
    source: "https://github.com/KITS2023",
    description:
      "My Travel Planner Web App! Built with Tailwind CSS and Next.js on the frontend, it offers a sleek and responsive interface. The backend, powered by Java and Spring Boot, ensures reliability and scalability. Users can create accounts, explore destinations, and save their favorites. With real-time data and convenient features like notifications, it's the perfect tool for seamless travel planning.",
  },
  {
    id: "mini-app",
    img: RestCountries,
    name: "MiniApps",
    stack: ["< RESTful API />", "< AntDesign/>", "< React.js />"],
    live: "false",
    source: "MiniApps",
    description:
      "Immerse yourself in my portfolio, which showcases a diverse range of mini web apps meticulously crafted to enhance productivity and entertainment. Powered by the dynamic combination of Vite and Ant Design, these apps deliver seamless user experiences wrapped in sleek and intuitive interfaces. Dive into the Pomodoro app to supercharge your productivity using customizable timers and breaks, or harness the Calculator app's efficiency for quick and precise calculations. Simplify currency conversions effortlessly with the MoneyExchange app, benefiting from real-time exchange rates for accurate results. Engage in strategic battles on the Chess Board app, challenging friends or computer opponents in a visually captivating interface. And when inspiration strikes, explore the Quotes app, where a curated collection of insightful quotes from renowned individuals awaits. Embark on a journey through these mini web apps, where Vite and Ant Design harmonize to create functional, visually appealing experiences that will captivate and delight.",
  },
  {
    id: "text-recognition",
    img: textRecognition,
    name: "Text Recognition - Mobile Application",
    stack: ["< React Native", "< CSS3 />"],
    live: "false",
    source: "https://github.com/tranvietlong/textRecognition",
    description:
      "Text Recognition app. Harnessing the power of advanced technologies, this app leverages the camera to effortlessly scan documents, revolutionizing the way we handle paperwork. Seamlessly extracting text from scanned documents, it streamlines the check-in and check-out process for workshops, eliminating the need for manual data entry. With this innovative app, users can save time, enhance productivity, and embrace a paperless future. Explore my portfolio and witness the transformative potential of mobile app development in action.",
  },
  {
    id: "hospital",
    img: hospital,
    name: "Hospital website",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "false",
    source: "https://gitlab.com/nghia2171998/hospital",
    description:
      "Showcasing a remarkable web app built on the Yii framework. This dynamic framework forms the foundation of a versatile web application, offering separate admin and client pages to cater to diverse user roles. Enhancing the app's functionality, VueJS is integrated seamlessly into the Yii framework, enabling smooth CRUD operations. Witness the seamless integration of front-end and back-end technologies as VueJS and Yii work in harmony. To ensure a hassle-free deployment, the web app is configured and successfully run on the popular XAMPP server stack. Discover the power of Yii, VueJS, and XAMPP in creating robust and user-friendly web applications through my portfolio.",
  },

  {
    id: "auto-car",
    img: jetbot,
    name: "Automated Robot (Car) using Artificial Intelligence",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "http://dx.doi.org/10.1109/ISMODE53584.2022.9743130",
    source: "http://dx.doi.org/10.1109/ISMODE53584.2022.9743130",
    description:
      "Unlock the potential of computer vision and machine learning with my portfolio, showcasing a groundbreaking project that combines OpenCV and advanced algorithms to revolutionize car guidance systems. This cutting-edge application leverages OpenCV's powerful image processing capabilities to detect and analyze objects in real-time, enabling cars to navigate and avoid obstacles autonomously. Through machine learning techniques, the system learns to follow a predetermined path while dynamically adjusting its trajectory to ensure safe and efficient navigation. Experience the future of autonomous driving as my portfolio unveils this remarkable integration of OpenCV and machine learning, paving the way for safer and more intelligent transportation systems.",
  },

  {
    id: "Pizza",
    img: Pizza,
    name: "Pizza website",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "false",
    source: "https://github.com/tranvietlong/Web_Base_IS-VNU",
    description:
      "Immerse yourself in the realm of web development as my portfolio presents a captivating static website built with HTML5, CSS, and JavaScript. This website boasts an engaging homepage that captivates visitors with its visually stunning design and intuitive user interface. Seamlessly navigate through the site and discover interactive features, such as a login and registration system that enables users to create personalized accounts. With robust input form validation in place, users can rest assured that their information is accurately and securely collected. Experience the artistry of HTML5, the elegance of CSS, and the interactivity of JavaScript as my portfolio showcases this static website, combining aesthetics and functionality to create a captivating user experience.",
  },
];

const InprogressProjectsData = [
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/tranvietlong",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },
];

export default { ProjectsData, InprogressProjectsData };
