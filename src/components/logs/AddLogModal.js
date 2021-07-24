import React, { useState } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';

const AddLogModal = ({ addLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please enter a message and tech'})
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLog(newLog);
            M.toast({ html: `Log added by ${tech}` })

            setMessage('');
            setAttention(false);
            setTech('');
        }
    };

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Modal Content</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="message" 
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sarah Wilson">Sarah Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="attention" 
                                    value={attention} 
                                    className="filled-in"
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                {/* eslint-disable-next-line */}
                <a 
                    href="#!" 
                    className="modal-close waves-effect blue waves-light btn"
                    onClick={onSubmit}
                >
                    Enter
                </a>
            </div>
        </div>
    );

};

const modalStyle = {
    width: "75%",
    height: "75%"
}   

export default connect(null, { addLog })(AddLogModal);
