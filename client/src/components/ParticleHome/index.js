import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

import candle from '../../img/candle.png'

function ParticleHome() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
      
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
                        "color": "000"
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
                            "enable": false,
                            "mode": "remove"
                        }
                    }
                } 
            }}
        />
    );
}
export default ParticleHome;