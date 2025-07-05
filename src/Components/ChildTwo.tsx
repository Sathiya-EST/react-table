import { Paper } from "@mui/material";
import { useGetAllCardsQuery } from "../store/services/getCardDetails";
import { DataGrid } from "@mui/x-data-grid";

export interface CardData {
  userId: string;
  title: string;
  body: string;
  id: number;
}
export interface Cardprops {
  data: CardData[];
}
const ChildTwo = ({ data }: Cardprops) => {
  const { data: cardData, isLoading } = useGetAllCardsQuery();
  const columns = [
    { field: "userId", headerName: "User Id", width: 90 },
    { field: "title", headerName: "Title", width: 500 },
    { field: "body", headerName: "Body", width: 600 },
  ];
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <p>Hello World</p>

      <Paper sx={{ height: 400 }}>
        <DataGrid
          rows={cardData}
          columns={columns}
          //   initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          //   checkboxSelection
          sx={{ border: 0, background: "white" }}
        />
      </Paper>
    </div>
  );
};

export default ChildTwo;
