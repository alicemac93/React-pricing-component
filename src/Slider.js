import React, {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

// styling
const PrettoSlider = withStyles({
    root: {
      color: 'hsl(174, 77%, 80%)',
      height: 8,
      width: "80%",
    },
    thumb: {
      height: 30,
      width: 30,
      backgroundColor: 'hsl(174, 86%, 45%)',
      border: 'none',
      marginTop: -12,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  const TopWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 400px;
    align-items: center;
    `

// data

const plansToMap = [
  {pageviews: 10, unit: "K", price: 8}, 
  {pageviews: 50, unit: "K", price: 12}, 
  {pageviews: 100,unit: "K", price: 16}, 
  {pageviews: 500, unit: "K",price: 24}, 
  {pageviews: 1, unit: "M",price: 36}
]

  function SliderContainer(props) {
    const [plan, setPlans] = useState(plansToMap[2]);

    const handleChange = (e, val) => {
        setPlans(plansToMap[val])
    }

    return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <TopWrapper>
      <p>{plan.pageviews}{plan.unit} PAGEVIEWS</p> 
      <p><span style={{color: "hsl(227, 35%, 25%)", fontWeight: "800", fontSize: "30px"}}>${(props.switchActive) ? (plan.price*0.75).toFixed(2) : plan.price}{(!props.switchActive) && ".00"}</span>/month</p>
      </TopWrapper>
      <PrettoSlider 
        defaultValue={2} 
        min={0}
        max={plansToMap.length-1}
        onChange={handleChange}
      />
    </div>
    );
}

export default SliderContainer;

/*

Here are the different page view ranges and the corresponding monthly price totals:



If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

*/