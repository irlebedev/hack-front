import React, { FC } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";
import { IEmployees } from "../../api";
import TableContent from "../TableContent";

interface ITableComponent {
  data: IEmployees[]
}

export const TableComponent: FC<ITableComponent> = (
  { data }: ITableComponent
) => {

  const keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  console.log("data", data);

  const renderContent = () => data.map(
    (item: IEmployees, index: number
    ) => <TableContent item={item} key={index} />)

  return (
    <>
      <Table className="mb-0">
        <TableHead>
          <TableRow>
            {keys.map(key => key !== "GOALS" && (
              <TableCell key={key}>{key}</TableCell>
            ))}
            <TableCell>CHOOSE AN ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderContent()}
        </TableBody>
      </Table>
    </>
  );
}

TableComponent.displayName = "TableComponent";
