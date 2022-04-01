import styled from 'styled-components'

export const PageWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 24px;
`

export const AddItemContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const ItemListContainer = styled.div`
    height: 280px;
    max-width: 400px;
    overflow-y: auto;
`