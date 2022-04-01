import styled from 'styled-components'

export const Input = styled.input`
    width: 288px;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    background: #fff;
    border: none;
    padding: 15px 16px;

    font-style: normal;
    font-weight: 400;
    color: var(--gray-600);
    line-height: 18px;
    font-size: 16px;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-style: italic;
        color: var(--gray-500);
    }

`