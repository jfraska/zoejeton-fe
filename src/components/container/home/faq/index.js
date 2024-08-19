import "./style.css";

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
          <span
            className="w-5 aspect-square icon-[ic--outline-minus]"
            style={{ color: "white" }}
          />
        ) : (
          <span
            className="w-5 aspect-square icon-[ic--outline-plus]"
            style={{ color: "white" }}
          />
        )}
      </div>
      <div className={selected === index ? "accordion show" : "accordion"}>
        <p className="md:text-sm text-xs leading-tight">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
