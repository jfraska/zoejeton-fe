import "./style.css";
import { Icon } from "@iconify/react";

const FAQ = ({ faq, index, toggle, selected }) => {
  return (
    <div className="w-full cursor-pointer py-2 pr-2 border-b border-black text-black">
      <div className={`flex items-start gap-2`} onClick={() => toggle(index)}>
        <Icon
          icon="ic:outline-plus"
          width="20"
          className={`${
            selected === index ? "rotate-1" : "rotate-1"
          } transition-all ease-linear delay-100`}
        />
        <h1 className="text-sm leading-tight">{faq.question}</h1>
      </div>
      <div className={selected === index ? "accordion show" : "accordion"}>
        <p className="pl-7 text-xs leading-tight">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
