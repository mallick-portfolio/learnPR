import React from "react";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

const Faq = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(true);
  console.log(active);
  const handleClick = (id) => {
    if (active === id) {
      setActive(0);
      setShow(false);
    }
    setActive(id);
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-center justify-start gap-3 relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-primary mb-4 sm:mb-5 md:mb-6">
        <AiOutlineQuestionCircle className="text-2xl text-textBase" />
        <h3 className="text-xl font-medium font-robotoS">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h3>
      </div>
      <ul className="flex flex-col gap-8">
        {faqs.map((faq) => (
          <li
            key={faq.id}
            className={`flex gap-3 py-3  overflow-hidden ${
              active === faq.id && show
                ? "h-auto transition-all duration-1000"
                : "h-12 transition-all duration-1000"
            }`}
          >
            <div onClick={() => handleClick(faq.id)} className="cursor-pointer">
              <BsPlusLg className="text-4xl p-3 bg-primary rounded-md text-white" />
            </div>
            <div>
              <h5 className="text-base sm:text-lg font-robotoS text-secondary my-1">
                {faq.title}
              </h5>
              <p className="mt-4 text-sm text-textBase">{faq.des}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const faqs = [
  {
    id: 1,
    title: "Why LearnPro University is Best?",
    des: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: 2,
    title: "Why LearnPro University is Best?",
    des: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: 3,
    title: "Why LearnPro University is Best?",
    des: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: 4,
    title: "Why LearnPro University is Best?",
    des: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: 5,
    title: "Why LearnPro University is Best?",
    des: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
];

export default Faq;
