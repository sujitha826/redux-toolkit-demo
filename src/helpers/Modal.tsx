import { FC } from 'react';
import '../features/css/Modal.css';

type Modalprops = {
    title: string;
    show: boolean;
    onClose: () => void;
}

export const Modal: FC<Modalprops> = ({ show, title, onClose }) => {
    // if (!show) {
    //     return null;
    // }

    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>{title}</h4>
                </div>
                <div className='modal-body'>
                    Modal Body
                </div>
                <div className='modal-footer'>
                    <button className='modal-button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
