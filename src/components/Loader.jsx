import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="flex items-center justify-center h-full">
        <span className="animate-spin h-20 w-20 border-t-2 border-white border-solid rounded-full"></span>
        <p className="text-white text-md  ml-2 -translate-x-16">{progress.toFixed()}%</p>  
      </div>
    </Html>
  );
};

export default Loader;
