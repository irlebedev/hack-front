import React, { FC, forwardRef, ReactElement, Ref } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

interface IModalCreateProps {
  title: string,
  isActive: boolean,
  toggleModal: () => void,
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const ModalInfo: FC<IModalCreateProps> = (
  { title, isActive, toggleModal }: IModalCreateProps
) => {

  return (
    <div>
      <Dialog
        open={isActive}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>

        <DialogActions>
          <Button autoFocus onClick={toggleModal}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ModalInfo.displayName = "ModalInfo";
