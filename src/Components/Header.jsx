import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
// import { LuMenuSquare } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      icon: <CgShoppingCart />,
      title: "Cart",
    },
    {
      id: 2,
      icon: <BsInfoCircle />,
      title: "About",
    },
    {
      id: 3,
      icon: <TfiHeadphoneAlt />,
      title: "Contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    /* background styles for header */
    <header className="bg-glass [backdrop-filter:blur(30px)] rounded-3xl mt-5 px-4 md:px-1 mx-8 py-5 sticky top-2">
      {/* For All header items */}
      <div className="flex justify-between md:justify-evenly md:items-center ">
        {/* Input element and logo */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center items-start">
          <img
            src="logo.jpg"
            alt="logo"
            onClick={() => navigate("/")}
            className="cursor-pointer w-16 h-16 rounded-full hidden md:block"
          />
          <h3 className="text-3xl font-Tourney md:hidden text-primary font-extrabold select-none">Daily Spark</h3>
          {/* Input feild */}
          <div className="relative">
            <input
              type="text"
              name="Creators"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 w-80 md:w-64 rounded-full justify-self-stretch border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <BsSearch className="icon w-5 h-4 absolute top-1/3 left-3 " />
          </div>
          {/* Input feild Close */}
        </div>
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div key={item.id} className="header_element">
              {item.icon}
              <button>{item.title}</button>
            </div>
            {/* <span className="effect"></span> */}
          </div>
        ))}
        <div className="header_element outline rounded-3xl px-4 py-2 hover:bg-primary hover:text-white ">
          <button>Subscribe</button>
          <MdKeyboardArrowDown />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl"
          >
            {!isMenuOpen ? <MdOutlineMenu /> : <RxCross2 />}
          </button>
          <div
            className={`top-0 right-0 md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {menuItems.map((item) => (
              <div key={item.id} className="flex gap-2 items-center py-1">
                {item.icon}
                <button>{item.title}</button>
              </div>
            ))}
            <div className="extraBtn">Signup</div>
            <div className="extraBtn">Login</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
