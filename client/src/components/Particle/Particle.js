import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function Particle({ matchResult }) {
    const color = matchResult === "correct" ? "#219ebc" : "#db2f18";
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="container-particle"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                    "number": {
                        "value": 440
                    },
                    "color": {
                        "value": color
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 1,
                            "color": "fff"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 120,
                        "color": color
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out",
                        "random": true
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    }
                }
            }}
        />
    );
}
export default Particle;