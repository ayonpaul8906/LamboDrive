import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTachometerAlt, FaGasPump } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';

import greenCar from '../assets/green.png';
import orangeCar from '../assets/orange.png';
import yellowCar from '../assets/yellow.png';
import logo from '../assets/logo.png';

const cars = [
  {
    color: 'green',
    hex: '#28a745',
    title: 'GREEN',
    image: greenCar,
    speed: '325 KM/H',
    power: '640 PS (631 HP)',
    mileage: '~7-8 KM/L',
  },
  {
    color: 'orange',
    hex: '#fd7e14',
    title: 'ORANGE',
    image: orangeCar,
    speed: '322 KM/H',
    power: '631 PS (620 HP)',
    mileage: '~6-7 KM/L',
  },
  {
    color: 'yellow',
    hex: '#ffc107',
    title: 'YELLOW',
    image: yellowCar,
    speed: '320 KM/H',
    power: '610 PS (602 HP)',
    mileage: '~5-6 KM/L',
  },
];

const specsVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function CarSlider() {
  const [selected, setSelected] = useState(0);
  const car = cars[selected];

  return (
    <div className="fixed inset-0 flex font-sans select-none overflow-hidden">
      <div className="flex flex-col justify-between w-1/2  py-10 bg-white z-20 relative">
        <div className="flex flex-col gap-20">
          {/* LOGO + BRAND */}
          <div className="flex items-center mb-8">
            <img
              src={logo}
              alt="Lamborghini Logo"
              className="h-25 object-contain"
            />
            <span className="font-serif text-4xl font-bold italic text-black tracking-wide select-none">
              Lamborghini
            </span>
          </div>

          {/* COLOR BUTTONS */}
          <div className="flex flex-col gap-5 px-10 ">
            {cars.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-10 h-10 rounded-2rem border-2 transition-all duration-300 ${selected === i
                  ? 'border-black scale-125 shadow-lg'
                  : 'opacity-70 hover:opacity-100 hover:scale-110 border-gray-300'
                  }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="w-1/2 relative z-10"
        style={{ backgroundColor: car.hex, transition: 'background-color 0.8s ease' }}
      >
        {/* COLOR TITLE */}
        <h1
          className="absolute top-10 right-10 text-[6vw] font-extrabold uppercase tracking-tight text-white opacity-50 pointer-events-none select-none"
          style={{ fontFamily: 'Racing Sans One, Teko' }}
        >
          {car.title}
        </h1>

        {/* SPECS */}
          <div
            className="absolute left-[75%] top-1/2 -translate-y-1/2 flex flex-col gap-8 text-white z-20"
          >
            <div className="flex items-center gap-3">
              <FaTachometerAlt size={28} className="opacity-80" />
              <div>
                <div className="text-xl font-semibold">{car.speed}</div>
                <div className="text-xs text-white/70 uppercase">Top Speed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GiCarWheel size={28} className="opacity-80" />
              <div>
                <div className="text-xl font-semibold">{car.power}</div>
                <div className="text-xs text-white/70 uppercase">Engine Power</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaGasPump size={24} className="opacity-80" />
              <div>
                <div className="text-xl font-semibold">{car.mileage}</div>
                <div className="text-xs text-white/70 uppercase">Mileage</div>
              </div>
            </div>
          </div>
      </div>

      {/* CAR IMAGE */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-100 pointer-events-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={car.image}
            src={car.image}
            alt={`${car.color} Lamborghini`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute w-[60vw] max-w-[900px] h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)]"
            draggable={false}
          />
        </AnimatePresence>

        {/* CAR NAME */}
        <div className="absolute bottom-8 text-center">
          <h1
            className="uppercase font-extrabold text-[6vw] tracking-widest"
            style={{ fontFamily: 'Racing Sans One, Teko' }}
          >
            <span
              className="mr-2"
              style={{
                color: car.hex,
                opacity: 0.7,
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              Lamborghini
            </span>
            <span
              className="text-white"
              style={{
                opacity: 0.7,
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              Huracan Evo
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
