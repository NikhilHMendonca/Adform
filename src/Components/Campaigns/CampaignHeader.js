import {
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";

const CampaignHeader = () => {
    return(
        <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Username</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Start date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>End date</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Active</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Budget</TableCell>
            </TableRow>
          </TableHead>
    )
}

export default CampaignHeader;