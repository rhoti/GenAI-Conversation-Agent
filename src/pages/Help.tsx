// import React, { useState } from 'react';

// export const Help = () => {
//   // State to manage user question and response
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');

//   // Sample FAQs
//   const faqs = [
//     { question: "How do I reset my password?", answer: "To reset your password, go to settings, then select 'Reset Password'." },
//     { question: "Where can I find my order history?", answer: "You can find your order history under the 'Orders' tab in your account." },
//     { question: "How do I contact customer support?", answer: "You can contact support via the 'Help' section in your profile." },
//   ];

//   // Handle question submission (replace with actual API call or logic)
//   const handleAskQuestion = (e: React.FormEvent) => {
//     e.preventDefault();
//     // For demonstration, we mock a response here.
//     const mockResponse = `This is a response to your question: "${question}"`;
//     setResponse(mockResponse);
//   };

//   // Function to select an FAQ and set it as the response
//   const handleFaqClick = (faqAnswer: string) => {
//     setResponse(faqAnswer);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
//       {/* Left Side - User Input */}
//       <div className="w-1/2 p-8 bg-white dark:bg-gray-800">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Ask a Question</h2>
        
//         <form onSubmit={handleAskQuestion} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Type your question here..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
//           />
//           <button
//             type="submit"
//             className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
//           >
//             Ask
//           </button>
//         </form>

//         {/* Display Response */}
//         {response && (
//           <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
//             <h3 className="font-semibold text-gray-700 dark:text-gray-300">Response:</h3>
//             <p className="text-gray-800 dark:text-white">{response}</p>
//           </div>
//         )}
//       </div>

//       {/* Right Side - Frequently Asked Questions */}
//       <div className="w-1/2 p-8 bg-gray-200 dark:bg-gray-700">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
        
//         <ul className="space-y-4">
//           {faqs.map((faq, index) => (
//             <li
//               key={index}
//               className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline"
//               onClick={() => handleFaqClick(faq.answer)}
//             >
//               {faq.question}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };



import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import { FiPlus, FiSend } from 'react-icons/fi';
import 'react-resizable/css/styles.css';
import { BsFillQuestionOctagonFill } from 'react-icons/bs';

export const Help = () => {
    // State to manage user question and response
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
  
    // Sample FAQs
    const faqs = [
      { question: "How do I reset my password?", answer: "To reset your password, go to settings, then select 'Reset Password'." },
      { question: "Where can I find my order history?", answer: "You can find your order history under the 'Orders' tab in your account." },
      { question: "How do I contact customer support?", answer: "You can contact support via the 'Help' section in your profile." },
    ];
  
    // Handle question submission (replace with actual API call or logic)
    const handleAskQuestion = (e: React.FormEvent) => {
      e.preventDefault();
      // For demonstration, we mock a response here.
      const mockResponse = `This is a response to your question: "${question}"`;
      setResponse(mockResponse);
    };
  
    // Function to select an FAQ and set it as the response
    const handleFaqClick = (faqAnswer: string) => {
      setResponse(faqAnswer);
    };
  

  return (
    <div className="flex">
      {/* Left Side with Resizable Container */}
      <ResizableBox width={600} height={600} minConstraints={[300, 300]} maxConstraints={[800, 800]}>
        <div className="flex flex-col gap-12 bg-gray-300 p-6 rounded-lg shadow-md dark:bg-gray-800 w-full max-w-md">
          
          {/* Image Upload Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 flex  justify-center dark:text-white mb-4">Ask</h2>
            <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mb-4 flex items-center justify-center">
              <h1>Lotie animation depicting this ask aspect</h1>
              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>

              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>

              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>
              <BsFillQuestionOctagonFill/>
            </div>
  
          <form onSubmit={handleAskQuestion} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              Ask
            </button>
          </form>
          {/* Display Response */}
          
          {response && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">Response:</h3>
            <p className="text-gray-800 dark:text-white">{response}</p>
          </div>
        )}

        </div>
      </div>

      </ResizableBox>

      {/* Right Side: Analysis Prompt */}
      <div className="w-[30vw] flex flex-col items-center justify-start p-4 space-y-4">        
        {/* Chat Messages Container with Scroll */}
        <div className="w-full h-[60vh] overflow-y-auto space-y-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => handleFaqClick(faq.answer)}
              >
                {faq.question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};