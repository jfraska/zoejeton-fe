import "./style.css";
import { Icon } from "@iconify/react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      key={index}
      className="flex flex-col w-full py-2 pr-2 border-b border-white"
      onClick={() => toggleFAQ(index)}
    >
      <div className={"faq " + (faq.open ? "open" : "")}>
        <div className={"flex items-end justify-between faq-question"}>
          <h1 className="md:text-lg text-sm leading-tight">{faq.question}</h1>
          <Icon icon="ic:outline-plus" color="white" width="20" />
        </div>
        <div className="faq-answer">
          <h1 className="md:text-sm text-xs leading-tight">{faq.answer}</h1>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
