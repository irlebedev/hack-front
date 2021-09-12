import React, { FC, useEffect } from "react";
import {
  TableRow,
  TableCell,
  Chip,
  Button,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { IEmployees } from "../../api";
import { useAppDispatch } from "../../redux/hooks";
import { setClientInfo } from "../../redux/idpSlice";

interface ITableContent {
  item: IEmployees
}

export const TableContent: FC<ITableContent> = (
  { item }: ITableContent
) => {
  const { id, date, customer, direction, status } = item;

  const dispatch = useAppDispatch();
  const history = useHistory();

  //const [openModalDetails, setOpenModalDetails] = useState<boolean>(false);
  const handleOpenDetails = () => {
    dispatch(setClientInfo({ id, customer }));
    history.push(`/main/`);
  };

  return (
    <TableRow key={id} onClick={handleOpenDetails} sx={{ cursor: "pointer", ":hover": { backgroundColor: "#F1F2F4" } }}>
      <TableCell className="pl-3 fw-normal">{date}</TableCell>
      <TableCell>{customer}</TableCell>
      <TableCell>{direction}</TableCell>
      <TableCell>
        <Chip
          label={status === 2 ? "Завершено" : status === 1 ? "В процессе" : "Создано"}
          color={status === 2 ? "success" : status === 1 ? "warning" : "info"}
          size="small"
          sx={{ minWidth: "6rem" }}
        />
      </TableCell>
      <TableCell sx={{ display: "flex", gap: "1rem" }}>
        <Button variant="contained" size="small">
          Подтвердить
        </Button>
        <Button
          variant="contained"
          size="small"
        >
          Отклонить
        </Button>
        <Button
          variant="contained"
          size="small"
        >
          Удалить
        </Button>
        {/* {openModalDetails &&
          <DialogDetails
            isActive={openModalDetails}
            toggleModal={handleOpenDetails}
            handlerConfirm={handleOpenDetails}
            idpInfo={item}
          />
        } */}
      </TableCell>
    </TableRow>
  )
}