import "./style.css";

const FAQ = ({ faq, index, toggle, selected }) => {
  return (
    <div className="w-full cursor-pointer py-1 pr-2 border-b border-black text-black leading-none">
      <div
        className={`flex justify-between items-start`}
        onClick={() => toggle(index)}
      >
        <h1 className="text-sm">{faq.question}</h1>
        <span
          className="w-5 aspect-square icon-[ri--arrow-up-s-line]"
          style={{ color: "black", transform: "rotate(180deg)" }}
        />
      </div>
      <div className={selected === index ? "accordion show" : "accordion"}>
        <p className="text-xs">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
