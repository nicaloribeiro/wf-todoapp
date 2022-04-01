import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 352px;
    height: 32px;
    background: var(--gray-200);
    border-radius: 2px;
    padding: 8px 16px;
    margin-bottom: 8px;

    font-style: normal;
    font-weight: 400;
    color: var(--gray-600);
    font-size: 14px;
    line-height: 16px;

    p {
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap; 
    }
  
`