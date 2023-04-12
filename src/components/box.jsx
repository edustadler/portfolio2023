import { OrbitControls, useAspect } from "@react-three/drei";

export default function Experience() {

    const scale = useAspect(
        300,                     // Pixel-width
        600,                      // Pixel-height
        .3                         // Optional scaling factor
    )

    return (
        <>
            <OrbitControls enableZoom={false}/>
            <mesh scale={scale} castShadow>
                {/* <sphereGeometry args={[1.5, 64, 80]}/> */}
                {/* <boxBufferGeometry/> */}
                <torusKnotBufferGeometry args={[10, -3, 40, 8, 4, 1]}/>
                <meshStandardMaterial color={'#3b3b3b'} emissive={1} metalness={8} roughness={0}/>
                <ambientLight color={"gray"} intensity={3} />
                <pointLight position={[10, 10, 10]} />
                
            </mesh>
        </>
    );
};