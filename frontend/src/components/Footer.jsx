import { useNavigate } from "react-router-dom";
import github from "/assets/github-mark.png";
import linkedin from "/assets/linkedin.png";
import logo from "/assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-20">

      <footer className="bg-gradient-to-b from-blue-100 to-blue-50 text-white pb-10 pt-10 pl-5 pr-5  ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">

          <section className="mb-4 md:mb-0 items-center flex flex-col">
            <img
              onClick={() => navigate("/home")}
              src={logo}
              alt="EventSpot Lite"
              className="cursor-pointer mb-2 h-14 w-auto"
            />
            <p className="text-lg text-black">Drive Smarter!</p>
          </section>

          <section className="mb-4 md:mb-0 text-black items-center flex flex-col">
            <nav>
              <ul className="list-none space-y-2">
                <li className="cursor-pointer hover:text-blue-800">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-blue-800">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-blue-800">
                  Refund Policy
                </li>
              </ul>
            </nav>
          </section>

          <section className="mb-4 md:mb-0 text-black items-center flex flex-col">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="list-none mt-2">
              <li>navya.sachdev18@gmail.com</li>
            </ul>
          </section>

          <section className="text-black items-center flex flex-col">
            <h4 className="font-semibold">Social Links</h4>
            <div className="flex space-x-2 mt-2">

              <a href="https://github.com/navyasachdev03" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" className="cursor-pointer h-11 w-auto hover:opacity-80" />
              </a>

              <a href="https://linkedin.com/in/navyasachdev03" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="cursor-pointer h-11 w-auto hover:opacity-80" />
              </a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}