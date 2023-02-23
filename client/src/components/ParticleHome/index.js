import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

import candle from '../../img/candle.png'

function ParticleHome() {
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
                        "value": 100
                    },
                    "color": {
                        "value": "#000"
                    },
                    "shape": {
                        "type": "image",
                        "stroke": {
                            "width": 10,
                        },
                        "image": {
                            "src": candle,
                        },
                    },
                    "opacity": {
                        "value": .75,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1
                        }
                    },
                    "size": {
                        "value": 30,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 120,
                        "color": "#023e8a"
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
export default ParticleHome;