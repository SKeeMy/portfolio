import React from "react";
import styles from './RangeSlider.module.css'
import { useState } from "react";



function RangeSlider() {
    const [value, setValue] = useState(0);

  const handleChange = (event) =>{
        setValue(event.target.value)
    }
    const getBackgroundSize = () =>{
        if (value == 1 ){
            return {backgroundSize: `${(value * 300) / 7}% 100%`, backgroundImage: 'linear-gradient(90deg, rgba(12,8,77,1) 10%, rgba(9,9,121,1) 77%, rgba(4,102,122,1) 96%)'
            }
        }
        if (value == 2 ){
            return {backgroundSize: `${(value * 300) / 8.5}% 100%`, backgroundImage: 'linear-gradient(90deg, rgba(3,4,119,1) 29%, rgba(9,121,121,1) 57%, rgba(8,176,210,1) 96%)'}
        }
        if (value == 3 ){
            return {backgroundSize: `${(value * 300) / 7.5}% 100%`, backgroundImage: 'linear-gradient(90deg, rgba(9,11,121,1) 25%, rgba(8,176,210,1) 57%, rgba(0,255,255,1) 96%)'}
        }
        
    }
    const valueStyle = () =>{
        if(value == 1){
            return {
                color: '#037081',
            }
        }
        if(value == 2){
            return {
                color: '#02A9C3'
            }
        }
        if(value == 3){
            return {
                color: 'aqua'
            }
        }

    }


return (
    <div className={styles["range_slider"]}>
        <input type="range" min={0} max={3} className={styles["slider" ]}value={value} onChange={handleChange} style={getBackgroundSize()}/>
        <span className={styles["rangeValue"]} style={valueStyle()}>{value}</span>
    </div>
    
)}


export default RangeSlider;