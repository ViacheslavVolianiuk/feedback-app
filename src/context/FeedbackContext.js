import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'HTML, CSS, SASS, JavaScript, React, Redux, Responsive design',
      rating: 10,
    },
    {
      id: 2,
      text: 'Finding a job is like taking part in a lottery, the more lottery tickets you buy, the more chances you have to win',
      rating: 10,
    },
    {
      id: 3,
      text: 'Hello, My name is Slava, I`m a frontend developer and I`m #OpenToWork',
      rating: 10,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
