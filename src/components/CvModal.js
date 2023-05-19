import { useDispatch, useSelector } from 'react-redux'

import { toggalCvModal } from '../actions/AppAction';

import PDFFile from '../assets/files/Rotem Patrakeev-CV.pdf'
import DOCFile from '../assets/files/Rotem Patrakeev-CV.docx'

import PdfIcon from './svg-components/PdfIcon';
import DocIcon from './svg-components/DocIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CvModal = () => {
    const isOpen = useSelector(state => state.app.isCvModalOpen);
    const dispatch = useDispatch();

    if (!isOpen) {
        return
    } else {
        return (
            <div className="cv-modal open-modal modal">
                <h2 className="modal-header-text contact-header">Want My Resume?</h2>
                <button className="icons-buttons close-btn" onClick={() => dispatch(toggalCvModal())} >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <p className="modal-sub-title">Select the file type to download</p>
                <div className="btns-container">
                    <a type="button"
                        className="btn btn-secondary btn-lg"
                        href={PDFFile}
                        download><PdfIcon style={{ width: '3rem' }} />
                    </a>
                    <a type="button"
                        className="btn btn-secondary btn-lg"
                        href={DOCFile}
                        download><DocIcon style={{ width: '3rem' }} />
                    </a>
                </div>
            </div>
        )

    }
}

export default CvModal
