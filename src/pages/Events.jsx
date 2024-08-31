import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import TextInput from '../components/inputs/TextInput';
import NumberInput from '../components/inputs/NumberInput';
import TimeInput from '../components/inputs/TimeInput';
import DateInput from '../components/inputs/DateInput';
import Dropdown from '../components/inputs/DropDown';
import { SiGooglegemini } from 'react-icons/si';
import axios from 'axios';

const Events = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for handling animation

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    genre: '',
    price: '',
    type: '',
    link: '',
    duration: '',
    language: '',
    ageRestriction: '',
    availableSeats: '',
    performers: '',
    creator: '',
    tags: '',
    image: null,
  });

  const [imageLoader, setImageLoader] = useState(false);

  const [prompt, setPrompt] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalOpen(true); // Trigger the slide-in animation after setting visibility
    }, 10); // Small delay to ensure visibility is applied before sliding in
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Start the slide-out animation
    setTimeout(() => {
      setIsModalVisible(false); // Hide the modal after the animation completes
      setFormData({
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
        performers: '',
        creator: '',
        tags: '',
        image: null,
      });
    }, 300);
  };

  const eventTypes = ['Virtual', 'In-Person', 'Hybrid'];

  const handleEventType = (value) => {
    console.log(value);
    setFormData({ ...formData, type: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const generateImage = async () => {
    setImageLoader(true);
    try {
      const { data } = await axios.get(
        `https://lexica.art/api/v1/search?q=${prompt}&size=3`
      );
      setFormData({
        ...formData,
        image: data.images[Math.floor(Math.random() * 50)].src,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setImageLoader(false);
    }
  };

  return (
    <div>
      <div className='flex justify-end p-10'>
        <button
          className='px-3 py-2 bg-black text-white rounded-md'
          onClick={handleOpenModal}
        >
          Create
        </button>
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity duration-300 flex items-center justify-center ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`relative  bg-white p-6 rounded-md shadow-lg w-full max-w-2xl transform transition-transform duration-300 ease-in-out h-screen overflow-y-auto scrollbar-hide  ${
              isModalOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-semibold'>Create Event</h2>
              <AiOutlineClose
                className='cursor-pointer text-xl'
                onClick={handleCloseModal}
              />
            </div>
            <div className='flex flex-col md:flex-row mb-5 gap-5'>
              <div className='w-full h-[200px] md:w-[250px] md:h-[250px] bg-gray-300'>
                <img
                  src={
                    formData.image ||
                    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  }
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <div className=' h-fit mt-5'>
                <button className='px-2 py-1 bg-black text-white rounded-md'>
                  Upload Image
                </button>
                <div className='w-full mt-5'>
                  <textarea
                    rows='4'
                    cols='50'
                    placeholder='Enter prompt here'
                    className='border border-black outline-none w-full p-2 rounded-md'
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <div className='flex justify-end mt-3'>
                    <button
                      className='flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600'
                      onClick={generateImage}
                    >
                      Generate Image{' '}
                      <div className={imageLoader ? 'animate-spin' : ''}>
                        <SiGooglegemini />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <TextInput
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  label='Title'
                  required
                />
                <TextInput
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  label='Description'
                  required
                />
                <DateInput
                  name='date'
                  value={formData.date}
                  onChange={handleInputChange}
                  label='Date'
                  required
                />
                <TimeInput
                  name='time'
                  value={formData.time}
                  onChange={handleInputChange}
                  label='Time'
                  required
                />
                <Dropdown
                  options={eventTypes}
                  selectedOption={formData.type || eventTypes[0]}
                  onOptionSelect={handleEventType}
                  label='Type'
                />
                <TextInput
                  name='location'
                  value={formData.location}
                  onChange={handleInputChange}
                  label='Location'
                  required
                />
                <TextInput
                  name='genre'
                  value={formData.genre}
                  onChange={handleInputChange}
                  label='Genre'
                  required
                />
                <NumberInput
                  name='price'
                  value={formData.price}
                  onChange={handleInputChange}
                  label='Price'
                />
                <TextInput
                  name='link'
                  value={formData.link}
                  onChange={handleInputChange}
                  label='Link'
                />
                <TextInput
                  name='duration'
                  value={formData.duration}
                  onChange={handleInputChange}
                  label='Duration'
                />
                <TextInput
                  name='language'
                  value={formData.language}
                  onChange={handleInputChange}
                  label='Language'
                />
                <TextInput
                  name='ageRestriction'
                  value={formData.ageRestriction}
                  onChange={handleInputChange}
                  label='Age Restriction'
                />
                <NumberInput
                  name='availableSeats'
                  value={formData.availableSeats}
                  onChange={handleInputChange}
                  label='Available Seats'
                />
                <TextInput
                  name='performers'
                  value={formData.performers}
                  onChange={handleInputChange}
                  label='Performers'
                />
                <TextInput
                  name='creator'
                  value={formData.creator}
                  onChange={handleInputChange}
                  label='Creator'
                />
                <TextInput
                  name='tags'
                  value={formData.tags}
                  onChange={handleInputChange}
                  label='Tags'
                />
              </div>
              <div className='mt-4 flex justify-end'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-black text-white rounded-md'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
