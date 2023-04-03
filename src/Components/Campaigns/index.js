import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import CampaignBody from "./CampaignBody";
import { useSelector, useDispatch } from "react-redux";
import {
  setAllCampaigns,
  setStartDate,
  setEndDate,
  setIsLoading,
  setUserSearch,
  selectCampaigns,
  selectStartDate,
  selectEndDate,
  selectUserSearch,
  selectIsLoading,
} from "../../features/campaigns/campaignsSlice";
import CampaignHeader from "./CampaignHeader";
import Filters from "../Filters";
import NoResults from "../NoResults";
import Loader from "../Loader";

const Campaigns = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const campaigns = useSelector(selectCampaigns);
  const selectedStartDate = useSelector(selectStartDate);
  const selectedEndDate = useSelector(selectEndDate);
  const userSearch = useSelector(selectUserSearch);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleOnUserSearch = (event) => {
    // resetting start date and end date if user searches by name
    // both date and search are working independently
    if (selectedStartDate) dispatch(setStartDate(""));
    if (selectedEndDate) dispatch(setEndDate(""));

    dispatch(setUserSearch(event.target.value));
    const searchedValue = event.target.value;
    let updatedList = campaigns.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(searchedValue.toLowerCase()) !== -1
      );
    });
    setFilteredCampaigns([...updatedList]);
  };

  useEffect(() => {
    // mock api that fetches campaign data
    fetch("https://6425876d7ac292e3cf033e7b.mockapi.io/campaigns/all-campaigns")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setIsLoading());
        dispatch(setAllCampaigns(data));
      });
  }, []);

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const dateFiltered = campaigns.filter((item) =>
        moment(item.startDate).isBetween(selectedStartDate, selectedEndDate)
      );
      setFilteredCampaigns(dateFiltered);
    }
  }, [selectedStartDate, selectedEndDate]);

  const results =
    userSearch.length > 0 || (selectedStartDate && selectedEndDate)
      ? filteredCampaigns
      : campaigns;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Adform Campaigns</h2>
          <Filters
            userSearch={userSearch}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            handleOnStartDateChange={(event) => {
              dispatch(setUserSearch(''));
              dispatch(setStartDate(event.target.value));
            }}
            handleOnEndDateChange={(event) => {
              dispatch(setUserSearch(''));
              dispatch(setEndDate(event.target.value));
            }}
            handleOnUserSearch={handleOnUserSearch}
          />
          {results && results.length > 0 ? (
            <TableContainer
              component={Paper}
              variant="outlined"
            >
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <>
                  <CampaignHeader />
                  <TableBody>
                    {results.map((campaign) => (
                      <CampaignBody key={campaign.userId} campaign={campaign} />
                    ))}
                  </TableBody>
                </>
              </Table>
            </TableContainer>
          ) : (
            <NoResults />
          )}
        </>
      )}
    </>
  );
};

export default Campaigns;
