import React from 'react';
import Modal from 'react-modal';
import Lottie from 'react-lottie';
import animationData from '../components/lotties/car.json';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {load} from '../reducers/loader.reducer'
const dispatch = useDispatch


function Loader() {
    const loader = useSelector(state => state.loader.value)
    const isLoading = (payload) => {
       dispatch(load(payload))
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div>
      <Modal
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
              border: '0px solid #ccc',
              background: 'rgba(0, 0, 0, 0.01)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        isOpen={loader.isModalOpen}
        contentLabel="Example Modal"
      >
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </Modal>
    </div>
  );
}
export default Loader