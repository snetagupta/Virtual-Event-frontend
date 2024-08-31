import React from 'react';

const CreateEvent = () => {
  return (
    <>
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
            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-3 h-fit mt-5'>
          <button className='px-2 py-1 bg-black text-white rounded-md'>
            Upload Image
          </button>
          <button className='flex items-center justify-center gap-1 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md'>
            Generate Image <SiGooglegemini />
          </button>
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
    </>
  );
};

export default CreateEvent;
