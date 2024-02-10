import "./style.css";
import { Icon } from "@iconify/react";

const FAQ = ({ faq, index, toggle, selected }) => {
  return (
    <div className="w-full py-2 pr-2 border-b border-white">
      <div
        className={"flex items-end justify-between cursor-pointer"}
        onClick={() => toggle(index)}
      >
        <h1 className="md:text-lg text-sm leading-tight">{faq.question}</h1>
        {selected === index ? (
          <Icon icon="ic:outline-minus" color="white" width="20" />
        ) : (
          <Icon icon="ic:outline-plus" color="white" width="20" />
        )}
      </div>
      <div className={selected === index ? "accordion show" : "accordion"}>
        <p className="md:text-sm text-xs leading-tight">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
