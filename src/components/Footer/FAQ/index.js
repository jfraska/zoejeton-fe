import "./style.css";
import { Icon } from "@iconify/react";

const FAQ = ({ faq, index, toggle, selected }) => {
  return (
    <div
      className={`${
        selected !== index ? "text-[#bfbfbf]" : "text-white"
      }  w-full underline-footer cursor-pointer py-2 pr-2 hover:text-white transition-all ease-linear`}
    >
      <div
        className={`flex items-end justify-between`}
        onClick={() => toggle(index)}
      >
        <h1 className="md:text-base text-sm leading-tight">{faq.question}</h1>
        {selected === index ? (
          <Icon icon="ic:outline-minus" width="20" />
        ) : (
          <Icon icon="ic:outline-plus" width="20" />
        )}
      </div>
      <div className={selected === index ? "accordion show" : "accordion"}>
        <p className="md:text-sm text-xs leading-tight">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
