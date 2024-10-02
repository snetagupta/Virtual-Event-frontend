import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    genre: '',
    price: '',
    link: '',
    duration: '',
    language: '',
    ageRestriction: '',
    availableSeats: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 formData={formData} handleInputChange={handleInputChange} />
        );
      case 2:
        return (
          <Step2 formData={formData} handleInputChange={handleInputChange} />
        );
      case 3:
        return (
          <Step3 formData={formData} handleInputChange={handleInputChange} />
        );
      case 4:
        return (
          <Step4 formData={formData} handleInputChange={handleInputChange} />
        );
      default:
        return null;
    }
  };

  return (
    <div className='max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10'>
      <h1 className='text-2xl font-bold mb-8 text-center'>Create Your Event</h1>
      <form>
        {renderStep()}
        <div className='mt-8 flex justify-between'>
          {step > 1 && (
            <button
              type='button'
              className='bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-all'
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 4 ? (
            <button
              type='button'
              className='bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition-all'
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <div
              //   type="submit"
              onClick={() => console.log(formData)}
              className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all'
            >
              Submit
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
