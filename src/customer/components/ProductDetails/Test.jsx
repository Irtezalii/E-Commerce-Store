import React, { useState } from 'react';

const CardDesigner = () => {
  const [color, setColor] = useState('bg-gray-200');
  const [cardHolderName, setCardHolderName] = useState('Your Name');
  const [cardNumber, setCardNumber] = useState('0000-0000-0000-0000');
  const [cardNumberPosition, setCardNumberPosition] = useState('Front');
  const [comment, setComment] = useState('');
  const [logo, setLogo] = useState(null);

  const handleColorChange = (colorClass) => {
    setColor(colorClass);
  };

  const handleLogoUpload = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      {/* Card Display */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center space-y-8">
        {/* Front of the card */}
        <div className={`rounded-lg shadow-lg p-8 ${color} w-full`}>
          <div className="text-2xl font-bold">{cardNumber}</div>
          <div className="text-sm mt-2">VALID THRU 55/55</div>
          <div className="text-xl mt-4">{cardHolderName}</div>
        </div>

        {/* Back of the card */}
        <div className={`rounded-lg shadow-lg p-8 bg-gray-200 w-full`}>
          <div className="bg-black h-8 w-full mb-4"></div>
          <div className="text-sm mb-2">5555</div>
          <div className="text-lg">{comment || 'Services: XXXX-XXXX-XXXX-XXXX'}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl mb-4">Design Your Card</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Color:</label>
          <div className="flex space-x-2">
            <button
              className="w-8 h-8 bg-yellow-400"
              onClick={() => handleColorChange('bg-yellow-400')}
            />
            <button
              className="w-8 h-8 bg-black"
              onClick={() => handleColorChange('bg-black')}
            />
            <button
              className="w-8 h-8 bg-gray-300"
              onClick={() => handleColorChange('bg-gray-300')}
            />
            <button
              className="w-8 h-8 bg-blue-500"
              onClick={() => handleColorChange('bg-blue-500')}
            />
            <button
              className="w-8 h-8 bg-pink-500"
              onClick={() => handleColorChange('bg-pink-500')}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Card Holder Name:</label>
          <input
            type="text"
            className="border p-2 w-full"
            maxLength={26}
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Card Number:</label>
          <input
            type="text"
            className="border p-2 w-full"
            maxLength={19}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Card Number On:</label>
          <select
            className="border p-2 w-full"
            value={cardNumberPosition}
            onChange={(e) => setCardNumberPosition(e.target.value)}
          >
            <option>Front</option>
            <option>Back</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Comment:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Add Logo:</label>
          <input type="file" onChange={handleLogoUpload} />
        </div>

        <div className="text-lg font-bold">TOTAL: 9500 PKR</div>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Create Card</button>
      </div>
    </div>
  );
};

export default CardDesigner;
