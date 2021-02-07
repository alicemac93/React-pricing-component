import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const AntSwitch = withStyles(() => ({
    root: {
      width: 35,
      height: 18,
      padding: 0,
    },
    switchBase: {
      padding: 3,
      color: 'white',
      '&$checked': {
        transform: 'translateX(15px)',
        color: 'white',
        '& + $track': {
          opacity: 1,
          backgroundColor: 'lightgrey',
        },
      },
    },
    thumb: {
      width: 13,
      height: 13,
      boxShadow: 'none',
    },
    track: {
      border: 'none',
      borderRadius: 22.5,
      opacity: 1,
      backgroundColor: 'hsl(174, 77%, 80%)',
    },
    checked: {},
  }))(Switch);

  const Discount = styled.span`
  color: hsl(15, 100%, 70%);
  font-size: 12px;
  background-color: hsl(14, 92%, 95%);
  border-radius: 22.5px;
  padding: 3px 5px;
  margin-left: 10px;
  `
  const SwitchWrapper = styled.div`
    padding: 25px 0;
  &:childern {
      padding: 10px
  }
  `
  

  function SwitchContainer(props) {
    return (
    <SwitchWrapper>
      <span>Monthly billing</span>
      <AntSwitch 
          checked={props.isActive}
          onChange={props.handleSwitch}
      />
      <span>Yearly Billing </span>
      <Discount>25% discount</Discount>
    </SwitchWrapper>
    );
}

export default SwitchContainer;