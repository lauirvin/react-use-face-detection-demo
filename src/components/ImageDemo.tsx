import { useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';

const ImageDemo = (): JSX.Element => {
  const { imgRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
  });

  return (
    <div>
      <p>{`Loading: ${isLoading}`}</p>
      <p>{`Face Detected: ${detected}`}</p>
      <p>{`Number of faces detected: ${facesDetected}`}</p>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: '4px solid red',
              position: 'absolute',
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
            }}
          />
        ))}
        <img
          crossOrigin="anonymous"
          ref={imgRef}
          alt=""
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            textAlign: 'center',
            zIndex: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
          src="https://previews.123rf.com/images/gdolgikh/gdolgikh1504/gdolgikh150400087/38738606-gruppe-gl%C3%BCckliche-junge-leute-isoliert-auf-wei%C3%9Fem-hintergrund.jpg"
        />
      </div>
    </div>
  );
};

export default ImageDemo;
