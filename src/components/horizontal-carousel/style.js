import styled from 'styled-components';

// export const StyledComponent = styled.div`
// `

export const StyledCarousel = styled.div`
    position:fixed;
    top:80px;
    left:50%;
    transform:translateX(-50%);
    border: 1px solid #000;
    display: flex;
    align-items: center;
`

export const CarouselWrapper = styled.div`

`

export const StyledPanelContainer = styled.div`
    background:#999;
    width: 50vw;
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
    background: #f6f6f6;
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
    width: 100%; 
    display: flex;
    justify-content: center;
`

export const StyledButton = styled.div`
    background: #f6f6f6;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin: 2rem 0.2rem;

    :hover {
        cursor: pointer;
    }
`

export const StyledPaginator = styled.button`
    opacity: ${props => props.clickable ? "1" : "0.4"};

    :hover {
        cursor: ${props => props.clickable ? "pointer": "auto"};
    }

    i {
        background: #FCF3D9;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        padding: 0.5rem;
    }
`



