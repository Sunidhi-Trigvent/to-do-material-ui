import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import GetData from "./GetData";

export default function DataGridDemo() {
  const [rowsData, setRowsData] = React.useState([]);
  const { getdata } = GetData();

  //   const obj = {
  //     name: "tanish",
  //     session: "2021",
  //   };

  //   const { name, session } = obj;

  React.useEffect(() => {
    (async function () {
      const data = await getdata();
      setRowsData(data);
    })();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      type: Number,
      width: 180,
      editable: false,
      valueGetter: (value, row) => (row?.data?.price ? row?.data?.price : "-"),
    },
    {
      field: "color",
      headerName: "color",
      width: 200,
      editable: false,
      valueGetter: (value, row) => (row?.data?.color ? row?.data?.color : "-"),
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 110,
      editable: false,
    },
  ];

  const rows = [];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
