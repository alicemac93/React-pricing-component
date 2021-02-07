import React from 'react';
import styled from "styled-components";

function Bottom(props) {

    const Button = styled.button`
        border: none;
        background-color: hsl(227, 35%, 25%);
        color: white;
        border-radius: 22.5px;
        padding: 10px 32px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &:hover{
            cursor: pointer
        }
    `
    const BottomWrapper = styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 425px;
        margin-left: -25px;
    `
    return (
    <BottomWrapper>
        <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
        </ul>
    <Button>Start my trial</Button>
    </BottomWrapper>
    );
}

export default Bottom;