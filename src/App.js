import { Box, Circle, Extrude, OrbitControls, RoundedBox, Stars } from "drei";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Physics, useSphere, useBox, usePlane } from "use-cannon";
import "./App.scss";

// const Ball = ({ args = [1, 1, 1] }) => {
//   const { viewport } = useThree();
//   const [ref, api] = useSphere(() => ({ args: 0.5, mass: 1 }));

//   usePlane(() => ({
//     position: [0, viewport.height/2, 0],
//     rotation: [-Math.PI / 2, 0, 0],
//     onCollide: () => {
//       api.position.set(0, 0, 0);
//       api.velocity.set(0, 10, 0);
//     },
//   }));

//   return (
//     <mesh ref={ref}>
//       <sphereBufferGeometry args={args} />
//       <meshStandardMaterial color="pink" />
//     </mesh>
//   );
// };

// const Paddle = ({ args = [1, 0, 1] }) => {
//   const [ref, api] = useBox(() => ({ args }));

//   useFrame((state) => {
//     api.position.set(
//       (state.mouse.x * state.viewport.width) / 2,
//       -state.viewport.height / 2,
//       0
//     );
//     api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
//   });
//   return (
//     <mesh ref={ref}>
//       <boxBufferGeometry args={args} />
//       <meshStandardMaterial color="white" />
//     </mesh>
//   );
// };
const Ball = () => {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
};

const Triangle = () => {
  return (
    <mesh>
      <circleBufferGeometry attach="geometry" args={[3, 3]} />
      <meshStandardMaterial attach="material" color="pink" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas colorManagement>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <OrbitControls />
      <Stars />
      <Physics>
        <Triangle/>
      </Physics>
    </Canvas>
  );
}

export default App;
