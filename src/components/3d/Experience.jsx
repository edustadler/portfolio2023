import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

export default function Experience(props) {
    const { count } = props;
    const radius = 3;

    // This reference gives us direct access to our points
    const points = useRef();

    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const distance = Math.sqrt(Math.random()) * radius;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            let x = distance * Math.sin(theta) * Math.cos(phi)
            let y = distance * Math.sin(theta) * Math.sin(phi);
            let z = distance * Math.cos(theta);

            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, [count]);

    const uniforms = useMemo(() => ({
        uTime: {
            value: 0.0
        },
        uRadius: {
            value: radius
        }
    }), [])

    useFrame((state) => {
        const { clock } = state;

        points.current.material.uniforms.uTime.value = clock.elapsedTime;
    });

    return (
        <>
            <OrbitControls enableZoom={false} enableRotate={true} />
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesPosition.length / 2}
                        array={particlesPosition}
                        itemSize={2}
                    />
                </bufferGeometry>
                <shaderMaterial
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />
            </points>
        </>
    );
}
