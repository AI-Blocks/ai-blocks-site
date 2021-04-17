import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { ResizeObserver } from '@juggle/resize-observer'

const roundedSquareWave = (t, delta, a, f) => {
    return ((2 * a) / Math.PI) * Math.atan(Math.sin(1.5*Math.PI * t * f) / delta)
};

function Dots(props) {
    const ref = useRef();
    const { vec, transform, positions, distances } = useMemo(() => {
        const vec = new THREE.Vector3();
        const transform = new THREE.Matrix4();

        // Precompute randomized initial positions
        const positions = [...Array(10000)].map((_, i) => {
            const position = new THREE.Vector3();
            // Place in a grid
            position.x = (i % 200) - 100;
            position.y = Math.floor(i / 200) - 20;

            // Offset every other column (hexagonal pattern)
            position.y += (i % 2) * 0.5;

            // Add some noise
            position.x += Math.random() * 0.3;
            position.y += Math.random() * 0.3;
            return position
        });

        // Precompute initial distances with octagonal offset
        const right = new THREE.Vector3(1, 0, 0);
        const distances = positions.map((pos) => {
            return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
        });
        return { vec, transform, positions, distances }
    }, []);
    useFrame(({ clock }) => {
        for (let i = 0; i < 10000; ++i) {
            const dist = distances[i];

            // Distance affects the wave phase
            const t = clock.elapsedTime - dist / 25;

            // Oscillates between -0.4 and +0.4
            const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8);

            // Scale initial position by our oscillator
            vec.copy(positions[i]).multiplyScalar(wave + 1.3);

            // Apply the Vector3 to a Matrix4
            transform.setPosition(vec);

            // Update Matrix4 for this instance
            ref.current.setMatrixAt(i, transform)
        }
        ref.current.instanceMatrix.needsUpdate = true
    });
    return (
        <instancedMesh ref={ref} args={[null, null, 10000]}>
            <circleBufferGeometry args={[0.15]} />
            <meshBasicMaterial color={props.dotColor}/>
        </instancedMesh>
    )
}

export class DotsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isDesktop: false //This is where I am having problems
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1500 });
    }

    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <Canvas
                orthographic
                camera={{zoom: isDesktop ? 25 : 10}}
                colorManagement={false} // Disabling colorManagement gives us raw colors (pure whites)
                resize={{polyfill: ResizeObserver}}
            >

                <Dots dotColor={this.props.dotColor}/>
                {this.props.children}
            </Canvas>
        )
    }
}
