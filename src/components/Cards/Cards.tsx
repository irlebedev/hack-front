import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { ICard } from "../../api";

interface ICardsProps {
  data: ICard[],
  toggleModalDeleteIDP?: () => void
}

export const Cards: FC<ICardsProps> = (
  { data, toggleModalDeleteIDP }: ICardsProps
) => {

  const navigate = useNavigate();
  const onEditHandler = () => navigate(`/main/plan`);

  const renderCards =
    data.map((
      { title, descr, dateEnd, status }: ICard, index: number
    ): JSX.Element => (
      <Box sx={{ width: "22rem" }} key={index}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14, display: "flex", justifyContent: "space-between" }}
              color="text.secondary"
              gutterBottom
            >
              ИПР (индивидуальный план развития)
              <Chip
                label={status === 2 ? "Завершено" : status === 1 ? "В процессе" : "Создано"}
                color={status === 2 ? "success" : status === 1 ? "warning" : "info"}
                size="small"
              />
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Срок окончания: {dateEnd}
            </Typography>
            <Typography variant="body2">
              {descr}
            </Typography>
          </CardContent>
          {status !== 2 &&
            <CardActions flex-direction="space-between">
              <Button
                size="small"
                onClick={onEditHandler}
              >
                Редактировать
              </Button>
              <Button
                size="small"
                onClick={toggleModalDeleteIDP}
              >
                Удалить
              </Button>
            </CardActions>
          }
        </Card>
      </Box >
    ));

  return (
    <>
      {renderCards}
    </>
  );
};
