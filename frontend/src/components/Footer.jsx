import { useNavigate } from "react-router-dom";
import github from "/assets/github-mark.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import logo from "/assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-20">

      {/* Main footer section with gradient background and padding */}
      <footer className="bg-gradient-to-b from-blue-100 to-blue-50 text-white pb-10 pt-10 pl-5 pr-5  ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">


          {/* Logo and tagline section */}
          <section className="mb-4 md:mb-0 items-center flex flex-col">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="EventSpot Lite"
              className="cursor-pointer mb-2 h-14 w-auto"
            />
            <p className="text-lg text-black">Find Events That Inspire!</p>
          </section>

          {/* Links to policies section */}
          <section className="mb-4 md:mb-0 text-black">
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

          {/* Contact information section */}
          <section className="mb-4 md:mb-0 text-black">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="list-none mt-2">
              <li>gbgauravbansal007@gmail.com</li>
            </ul>
          </section>

          {/* Social links section */}
          <section className="text-black">
            <h4 className="font-semibold">Social Links</h4>
            <div className="flex space-x-2 mt-2">

              {/* Link to GitHub profile */}
              <a href="https://github.com/gbgaurav007" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" className="cursor-pointer h-11 w-auto hover:opacity-80" />
              </a>

              {/* Link to LinkedIn profile */}
              <a href="https://linkedin.com/in/gauravbansal007" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="cursor-pointer h-11 w-auto hover:opacity-80" />
              </a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}