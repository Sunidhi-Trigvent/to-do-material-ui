import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import useCrud from "../hooks/useCrud";
import { Button } from "@mui/material";

export default function DataGridDemo() {
  const [rowsData, setRowsData] = React.useState([]);
  const { getData, deleteData } = useCrud();

  React.useEffect(() => {
    (async function () {
      const data = await getData();
      setRowsData(data);
    })();
  }, []);

  //handleDeletePost function
  const handleDeletePost = async (id) => {
    try {
      const res = await deleteData(id);
      if (res.status === 200) {
        const newUpdatedData = rowsData.filter((curData) => curData.id !== id);
        setRowsData(newUpdatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //datagrid columns
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      editable: false,
    },
    {
      field: "body",
      headerName: "Body",
      type: Number,
      width: 180,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
      renderCell: (params) => {
        const id = params.row.id; // Get the id from the current row

        return (
          <>
            <Button
              onClick={() => handleDeletePost(id)}
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginRight: 16 }}
            >
              Delete
            </Button>
            <Button variant="contained" color="primary" size="small">
              Add
            </Button>
          </>
        );
      },
    },
  ];

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
