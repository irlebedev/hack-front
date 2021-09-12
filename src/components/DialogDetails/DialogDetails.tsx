import React, { FC, forwardRef, ReactElement, Ref } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IEmployees } from "../../api";
import { Box } from "@mui/system";

interface iDialogLogOutProps {
  isActive: boolean,
  toggleModal: () => void
  handlerConfirm: () => void,
  idpInfo: IEmployees,
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogDetails: FC<iDialogLogOutProps> = (
  { isActive, toggleModal, handlerConfirm, idpInfo: { goals } }: iDialogLogOutProps
) => {

  console.log("goals", goals);

  const renderGoals = () => goals.map((item: IEmployees["goals"][0]) => (
    <React.Fragment key={item.id}>
      <DialogTitle
        id="responsive-dialog-title"
      >
        {item.name}
      </DialogTitle>
      <DialogTitle
        id="responsive-dialog-title"
      >
        {item.priority}
      </DialogTitle>
      <DialogTitle
        id="responsive-dialog-title"
      >
        {item.steps}
      </DialogTitle>
    </React.Fragment>
  ))

  return (
    <Box>
      <Dialog
        open={isActive}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="responsive-dialog-title"
        >
          Детальная информация ИПР
        </DialogTitle>
        {renderGoals()}
        <DialogActions>
          <Button autoFocus onClick={toggleModal}>
            Закрыть
          </Button>
          <Button onClick={handlerConfirm} autoFocus>
            Подтвердить ИПР
          </Button>
        </DialogActions>
      </Dialog>
    </Box >
  );
}
