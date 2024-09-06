import { AiOutlineCloudUpload } from 'react-icons/ai';


const FileInput = ({ name, onChange, imagePreview, onGenerateImage }) => (
  <div>
    <label className='block mb-1 text-black'>Image</label>
    <div className='flex items-center'>
      <input
        type='file'
        name={name}
        onChange={onChange}
        className='w-full px-3 py-2 border rounded-md'
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt='Preview'
          className='w-20 h-20 object-cover ml-4 border rounded-md'
        />
      )}
      <button
        type='button'
        onClick={onGenerateImage}
        className='ml-2 text-gray-600 hover:text-black'
      >
        <AiOutlineCloudUpload size={24} />
      </button>
    </div>
  </div>
);

export default FileInput;
