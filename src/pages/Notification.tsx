import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import { FiPlus, FiSend } from 'react-icons/fi';
import 'react-resizable/css/styles.css';

export const Notification = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<{ message: string; sender: string; image?: string }[]>([]);
  const [chatInput, setChatInput] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSendMessage = () => {
    if (chatInput.trim() || selectedImage) {
      // Add user message with image (if selected) and text input to chat
      const userMessage = { message: chatInput, sender: "user", image: selectedImage || undefined };
      setChatMessages([...chatMessages, userMessage]);

      // Clear inputs
      setChatInput("");
      setSelectedImage(null);

      // Simulate AI response for now
      handleAIResponse();
    }
  };

  const handleAIResponse = () => {
    const aiResponse = {
      message: "This is the AI analysis of your upload. If you included an image, it will be analyzed along with your text.",
      sender: "ai",
    };
    setChatMessages((prevMessages) => [...prevMessages, aiResponse]);
  };

  return (
    <div className="flex">
      {/* Left Side with Resizable Container */}
      <ResizableBox width={600} height={600} minConstraints={[300, 300]} maxConstraints={[800, 800]}>
        <div className="flex flex-col gap-12 bg-gray-300 p-6 rounded-lg shadow-md dark:bg-gray-800 w-full max-w-md">
          
          {/* Image Upload Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Notification</h2>
            <div className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg mb-4 flex items-center justify-center">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400"><FiPlus /></p>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              title="Upload an image"
              className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-900 file:text-white hover:file:bg-cyan-700"
            />
          </div>
  
          {/* Chat Window Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Description</h2>
            
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Embed text explaining your upload! [optional]"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-lg mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </ResizableBox>

      {/* Right Side: Analysis Prompt */}
      <div className="w-[30vw] flex flex-col items-center justify-start p-4 space-y-4">
        <h1 className="text-lg font-bold dark:text-white">Open-Notification</h1>
        
        {/* Chat Messages Container with Scroll */}
        <div className="w-full h-[60vh] overflow-y-auto space-y-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${msg.sender === "user" ? "bg-gray-300 dark:bg-gray-700" : "bg-cyan-900 text-white"}`}
            >
              {msg.image && (
                <div className="mb-2 flex items-center justify-center">
                  <img src={msg.image} alt="User upload" className="max-w-full max-h-40 rounded-md" />
                </div>
              )}
              <p className="text-sm">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};