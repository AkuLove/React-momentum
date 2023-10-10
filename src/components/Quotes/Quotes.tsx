import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import style from './Quotes.module.scss';
import { quotesData } from './quotesData';

function Quotes() {
  const [quote, setQuote] = useState(
    quotesData[Math.floor(Math.random() * quotesData.length)]
  );

  const variants = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    },
  };

  return (
    <div className={style.quotes}>
      <button
        type="button"
        onClick={() => {
          setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
        }}
      >
        <FiRefreshCw />
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={quote.text}
          {...variants}
          transition={{ duration: 0.5 }}
        >
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Quotes;
