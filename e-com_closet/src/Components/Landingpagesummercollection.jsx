import React, { useState, useEffect } from 'react';
import summercollectionbanner from '../assets/images/summercollectionbanner.png';

export default function Landingpagesummercollection() {
  const targetDate = new Date("2026-02-16T00:00:00"); // Change to your desired date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div className="Summer-Content">
        <img src={summercollectionbanner} alt="summer collection" style={{ width: '100%' }} />

        {/* Inner Text */}
        <div style={{position: 'absolute',
          top: '35%',
          left: '5%',
          color: '#091a5c',
        }}>
          <h2 style={{ fontSize: '48px', fontWeight: '600' }}>
            <span style={{ color: '#1e3a8a' }}>SUMMER </span>
            <span style={{ color: '#e63946' }}>COLLECTIONS</span>
          </h2>

          {/* Shop Now Button */}
          <button style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#ffffff',
            color: '#e63946',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '4px'
          }}>
            SHOP NOW →
          </button>

          {/* Countdown Timer */}
          <div style={{
            marginTop: '100px',
            display: 'flex',
            gap: '20px',
            fontFamily: 'monospace',
            fontSize: '24px',
            color: '#fff',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)'
          }}>
            <div>{String(timeLeft.days || 0).padStart(2,'0')}  <span style={{paddingLeft:'20px'}}>:</span> <p style={{fontSize:'14px'}}>Days</p></div>
            <div>{String(timeLeft.hours || 0).padStart(2,'0')} <span style={{paddingLeft:'20px'}}>:</span> <p style={{fontSize:'14px'}}>Hours</p></div>
            <div>{String(timeLeft.minutes || 0).padStart(2,'0')} <span style={{paddingLeft:'20px'}}>:</span> <p style={{fontSize:'14px'}}>Minutes</p></div>
            <div>{String(timeLeft.seconds || 0).padStart(2,'0')} <p style={{fontSize:'14px'}}>Seconds</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
