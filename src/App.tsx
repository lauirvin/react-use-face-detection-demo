import WebcamDemo from './components/WebcamDemo';
import ImageDemo from './components/ImageDemo';

const App = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <WebcamDemo />
    <ImageDemo />
  </div>
);
export default App;
