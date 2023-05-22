import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Components/form.js";
import Table from "./Components/table.js";

const App = () => {
  const [data, setData] = useState([]);
  const [editdata, setEditData] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = (data) => {
    axios.get("http://localhost:5000/api/get", data).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const create = (data) => {
    if (data.isedit) {
      axios
        .put(`http://localhost:5000/api/update/${data._id}`, data)
        .then(() => {
          getAll();      
        });
    } else {
      axios.post("http://localhost:5000/api/create", data).then(() => {
        getAll();
      });
    }
  };

  const Update = (data) => {
    setEditData(data);
  };

  const del = (res) => {
    var sure = window.confirm(
      `Are you sure to delete this Student! ${res.name} `
    );

    if (sure) {
      axios.delete(`http://localhost:5000/api/delete/${res._id}`).then(() => {
        getAll();
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <Form giveData={editdata} createAndUpdate={create} />
        </div>
        <div className="col-9">
          <Table displayData={data} getData={Update} deleteData={del} />
        </div>
      </div>
    </div>
  );
};

export default App;
