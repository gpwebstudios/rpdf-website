import dynamic from "next/dynamic";
import Modal from 'react-bootstrap/Modal';
import styles from "./video-modal.module.scss";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface VideoModalProps {
  modalId: string;
  videoUrl: string;
}

const VideoPlayer = (props: any) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="fade py-5"
    >
      <Modal.Body className="p-0">
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url={props.videoUrl}
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default VideoPlayer;