import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loader = () => {
    return (
        <Wrapper>Loading...</Wrapper>
    )
}

export default Loader;