import { Button, Col, Divider, Row } from "antd";
import { useState } from "react";
import MasterLayout from "../../../themes/masterLayout";
import * as XLSX from "xlsx";

const CreateTableFromExcel = () => {
  const [fileInput, setfileInput] = useState([]);
  const [output, setOutput] = useState("");

  const createTable = () => {
    let outputStr = "CREATE TABLE DEMO (\n";

    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_row_object_array(ws, { header: 1 });
      // console.log(data);

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element[0])
        if (element[0] === 0 || element[0] === "0" || element[0] === 1 || element[0] === "1") {
          outputStr += "\t" + element[1] + " ";
          if (element[2] === "C") {
            //Character
            if (element[3] === 1) {
              outputStr += "CHAR(1) ";
            } else {
              outputStr += "VARCHAR2(" + element[3] + " CHAR) ";
            }
          } else if (element[2] === "N") {
            //NUMBER
            if (element[3].includes(",")) {
              let split = element[3].split(",");
              outputStr += "NUMBER(" + split[0] + "," + split[1] + ") ";
            } else {
              outputStr += "NUMBER(" + element[3] + ") ";
            }
          } else if (element[2] === "D") {
            //Date
            outputStr += "DATE ";
          } else if (element[2] === "F") {
            outputStr += "CHAR(1) ";
          }

          // DEFAULT
          if (
            !(
              element[5] === undefined ||
              element[5] === null ||
              element[5] === ""
            )
          ) {
            if (element[5].trim() === "NULL_VAL") {
              outputStr += "DEFAULT '*' ";
            } else {
              outputStr += "DEFAULT " + element[5] + " ";
            }
          }

          // NULL OR NOTNULL
          if (element[4] === "N") {
            outputStr += "NOT NULL ";
          }

          outputStr += ",\n";
        }
      }

      let count = 0;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element[0] === 0 || element[0] === "0") {
          count ++;
          if(count === 1){
            outputStr += "\tCONSTRAINT _PK PRIMARY KEY (";
          }
          outputStr +=element[1] + ", ";
        }
      }
      
      outputStr = outputStr.slice(0, outputStr.lastIndexOf(","));
      outputStr += ")\n)";
      setOutput(outputStr);
    };

    reader.readAsBinaryString(fileInput[0]);
  };

  const onChange = (e) => {
    setfileInput([...fileInput, e.target.files[0]]);
  };

  return (
    <MasterLayout>
      <Divider orientation="left">Create Table From Excel</Divider>
      <Row justify="start">
        <Col span={12}>
          <input type="file" onChange={onChange} />
        </Col>

        <Col span={12}></Col>
      </Row>

      <Row justify="start">
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={() => createTable()}>
              Create
            </Button>
          </Divider>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>
    </MasterLayout>
  );
};

export default CreateTableFromExcel;
