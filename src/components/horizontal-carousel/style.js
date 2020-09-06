import styled from 'styled-components';

// export const StyledComponent = styled.div`
// `

export const StyledCarousel = styled.div`
    position:fixed;
    background:#f6f6f6;
    width:50vw;
    top:80px;
    left:50%;
    transform:translateX(-50%);
    border: 1px solid #000;
`

export const StyledPanelContainer = styled.div`
    background:#999;
    width: 100%;
    height: 50vh;
    overflow-x: hidden;

    .panel-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }
      
    .slide-in {
        transition:transform 1s;
    }
`

export const StyledPanel = styled.div`
    background:skyblue;
    height:100%;
    min-width: 100%;
    display: inline-block;

    .panel-content {
        padding:2rem;
        height:100%;
        width: 100%;
    }
`
export const StyledMenu = styled.div`
    background:#999;
    width:100%; 
    display: flex;
`

export const StyledButton = styled.div`
    background:skyblue;
    width:2rem;
    height:2rem;
    margin:2rem auto;
    text-align:center;

    :hover {
        cursor: pointer;
    }
`



