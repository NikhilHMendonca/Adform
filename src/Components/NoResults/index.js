import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const NoResults = () => {
  return (
    <Wrapper>
      <h3>Sorry no results found. Please modify your search.</h3>
    </Wrapper>
  );
};

export default NoResults;
