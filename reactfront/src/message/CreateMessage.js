import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/message/';

const CompCreateMessage = () => {
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, { category, message });
        navigate('/');
    };

    return (
        <div className='container'>
            <h3>Create message</h3>
            <form onSubmit={store}>
                <div className='row'>
                    <div className='col-4 offset-4'>
                        <div className='mb-3 text-start'>
                            <label className='form-label' htmlFor='category'>Category</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='form-control'
                                required
                            >
                                <option value=''>Select category</option>
                                <option value='Sports'>Sports</option>
                                <option value='Finance'>Finance</option>
                                <option value='Movies'>Movies</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4 offset-4'>
                        <div className='mb-3 text-start'>
                            <label className='form-label' htmlFor='message'>Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type='text'
                                className='form-control'
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 offset-4'>
                        <button type='submit' className='btn btn-primary'>
                            Store
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CompCreateMessage;
