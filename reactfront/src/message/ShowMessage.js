import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert';

const URI = 'http://localhost:8000/message/';

const formatDate = (dateString) => {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return new Date(dateString).toLocaleString(undefined, options);
};

const CompShowMessages = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        getMessages()
    }, [])

    // Show all messages
    const getMessages = async () => {
        const res = await axios.get(URI)
        setMessages(res.data)
    }

    // Delete a message   
    const deleteMessage = async (id) => {
        Swal({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to remove this message?',
            icon: 'warning',
            buttons: ['Cancel', 'Delete'],
            dangerMode: true,
        }).then(async (result) => {
            if (result) {
                await axios.delete(`${URI}${id}`);
                getMessages();
            }
        });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-regular fa-square-plus"></i></Link>
                    <h3>Log history</h3>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Category</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Log</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(messages) && messages.map((message) => (
                                <tr key={message.id}>
                                    <td>{message.category}</td>
                                    <td>{message.message}</td>
                                    <td>{formatDate(message.date)}</td>
                                    <td style={{ textAlign: 'left' }}>{message.log}</td>
                                    <td>
                                        <button onClick={() => deleteMessage(message.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default CompShowMessages