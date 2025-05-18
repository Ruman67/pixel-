import { useState, useRef, useEffect } from 'react';
import './Accor.css'; // Your CSS is here
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type AccordionItem = {
  title: string;
  content: string;
};

type AccorProps = {
  items: AccordionItem[];
};

const Accor = ({ items }: AccorProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItemComponent
          key={index}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

type AccordionItemProps = {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  content: string;
};

const AccordionItemComponent = ({ isOpen, onToggle, title, content }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={onToggle}>
        <h1>{title}</h1>
        <button className="icon-button" aria-expanded={isOpen}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{ maxHeight: height }}
        aria-hidden={!isOpen}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accor;
