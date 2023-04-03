import moment from "moment";
import {
    TableCell,
    TableRow,
  } from "@mui/material";
import styled from "styled-components";

const StatusWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Status = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    margin: 0 8px;
`

const CampaignBody = ({ campaign }) => {
  const startDate = moment(campaign.startDate).format("L");
  const endDate = moment(campaign.endDate).format("L");
  if (moment(endDate).isBefore(startDate)) return;
  const isActive = moment(campaign.endDate) > moment();
  const username = campaign.name ? campaign.name : "Unknown User";
  return (
    <TableRow>
      <TableCell>{username}</TableCell>
      <TableCell>{campaign.username}</TableCell>
      <TableCell>{startDate}</TableCell>
      <TableCell>{endDate}</TableCell>
      <TableCell>
        <StatusWrapper>
          <Status color={isActive ? 'green' : 'red' } />
          <span>{isActive ? "Active" : "Inactive"}</span>
        </StatusWrapper>
      </TableCell>
      <TableCell>${campaign.budget}</TableCell>
    </TableRow>
  );
};

export default CampaignBody;
