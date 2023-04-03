import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

const DateInput = styled.input`
  width: 180px;
  height: 20px;
  padding: 4px;
  margin-right: 16px;
  margin: 16px 16px 16px 0;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid grey;
`;

const SearchInput = styled.input`
  padding: 4px;
  width: 180px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid grey;
`;

const Filters = ({
  handleOnStartDateChange,
  handleOnEndDateChange,
  handleOnUserSearch,
  startDate,
  endDate,
  userSearch
}) => {
  return (
    <Wrapper>
      <div>
        <DateInput type="date" value={startDate} onChange={handleOnStartDateChange} max={endDate} />
        <DateInput type="date" value={endDate} onChange={handleOnEndDateChange} min={startDate} />
      </div>
      <SearchInput
        type="text"
        placeholder="Search by name"
        onChange={handleOnUserSearch}
        value={userSearch}
      />
    </Wrapper>
  );
};

export default Filters;
