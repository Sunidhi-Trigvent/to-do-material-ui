import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import GetData from "./GetData";
import axios from "axios";
import Posts from "./Posts";
import useCrud from "../hooks/useCrud";

export default function DataGridDemo() {
  const [rowsData, setRowsData] = React.useState([]);

  //   const obj = {
  //     name: "tanish",
  //     session: "2021",
  //   };

  //   const { name, session } = obj;

  //One way of doing it-
  //destructuring
  //   const { getdata } = GetData();

  //   React.useEffect(() => {
  //     (async function () {
  //       const data = await getdata();
  //       setRowsData(data);
  //     })();
  //   }, []);

  //---------------------------------------------

  //Second way of doing it-

  //fetch api
  //   async function getdata() {
  //     try {
  //       let response = await fetch("https://api.restful-api.dev/objects");
  //       let data = await response.json();
  //       setRowsData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   React.useEffect(() => {
  //     getdata();
  //   }, []);

  //Third way to fetch by Axios-
  // const API = "https://api.restful-api.dev/objects";

  // async function getData() {
  //   try {
  //     const response = await axios.get(API);
  //     //   console.log(response);
  //     setRowsData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // React.useEffect(() => {
  //   getData();
  // }, []);

  //Fourth way (by creating axios instance)
  //destructuring
  // const { getPostData } = Posts();
  const { getPost } = useCrud();

  React.useEffect(() => {
    // (async function () {
    //   const data = (await getPostData()).data;
    //   //console.log(data);
    //   setRowsData(data);
    // })();
    (async function () {
      const data = await getPost();
      //console.log(data);
      setRowsData(data);
    })();
  }, []);

  //datagrid columns
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "name",
    //   headerName: "Name",
    //   width: 250,
    //   editable: false,
    // },
    // {
    //   field: "price",
    //   headerName: "Price",
    //   type: Number,
    //   width: 180,
    //   editable: false,
    //   valueGetter: (value, row) => (row?.data?.price ? row?.data?.price : "-"),
    // },
    // {
    //   field: "color",
    //   headerName: "color",
    //   width: 200,
    //   editable: false,
    //   valueGetter: (value, row) => (row?.data?.color ? row?.data?.color : "-"),
    // },
    // {
    //   field: "capacity",
    //   headerName: "Capacity",
    //   width: 110,
    //   editable: false,
    //   valueGetter: (value, row) =>
    //     row?.data?.capacity ? row?.data?.capacity : "-",
    // },

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
  ];

  //   const rows = [];

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
