import { useState, useRef, useEffect } from 'react';
import './Accor.css';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Accor = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      title: 'first one',
      content: 'a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.'
    },
    {
      title: 'second one',
      content: 'a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.'
    }
  ];

  const toggleAccor = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          isOpen={openIndex === index}
          onToggle={() => toggleAccor(index)}
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

const AccordionItem = ({ isOpen, onToggle, title, content }: AccordionItemProps) => {
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
