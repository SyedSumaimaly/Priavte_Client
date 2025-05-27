import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BorderImage from '../img/Border-01.svg';
import CentralLogo from '../img/Logo-Text-01.png';
import Buttons01 from '../img/Buttons-01.svg';
import Buttons02 from '../img/Buttons-02.svg';
import Buttons03 from '../img/Buttons-03.svg';
import Buttons04 from '../img/Buttons-04.svg';
import Buttons05 from '../img/Buttons-05.svg';
import Buttons06 from '../img/Buttons-06.svg';
import Buttons07 from '../img/Buttons-07.svg';
import Buttons08 from '../img/Buttons-08.svg';
import Buttons09 from '../img/Buttons-09.svg';
import Buttons10 from '../img/Buttons-10.svg';
import Buttons11 from '../img/Buttons-11.svg';
import Buttons12 from '../img/Buttons-12.svg';
import Buttons13 from '../img/Buttons-13.svg';
import './circle.css';

const CircularButtonLayout = () => {
    const containerSize = 590;
    const circleRadius = containerSize / 2 - 90; // Tighter placement
    const angleOffset = -90;

    const buttons = [
        { img: Buttons01, link: '#' },
        { img: Buttons02, link: '#' },
        { img: Buttons03, link: '#' },
        { img: Buttons04, link: '#' },
        { img: Buttons05, link: '#' },
        { img: Buttons06, link: '#' },
        { img: Buttons07, link: '#' },
        { img: Buttons08, link: '#' },
        { img: Buttons09, link: '#' },
        { img: Buttons10, link: '#' },
        { img: Buttons11, link: '#' },
        { img: Buttons12, link: '#' },
        { img: Buttons13, link: '#' },
    ];

    return (
        <div className="circular-container" style={{ width: containerSize, height: containerSize }}>
            <img src={BorderImage} alt="Wheel" className="wheel-background" />
            <img src={CentralLogo} alt="Logo Center" className="center-logo" />

            {buttons.map(({ img, link }, index) => {
                const angle = (360 / buttons.length) * index + angleOffset;
                const rad = (angle * Math.PI) / 180;
                const x = circleRadius * Math.cos(rad);
                const y = circleRadius * Math.sin(rad);

                return (
                    <motion.a
                        key={index}
                        href={link}
                        className="circular-button"
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                        }}
                        tabIndex={0}
                        whileHover={{
                            scale: 1.1,
                            rotate: 6,
                            y: '-5%',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <img src={img} alt={`Button ${index + 1}`} className="button-image" draggable={false} />
                    </motion.a>
                );
            })}
        </div>
    );
};

export default CircularButtonLayout;
