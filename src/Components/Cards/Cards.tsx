import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { ICard, statusCards } from '../../api';

interface ICardsProps {
  data: ICard[],
}

export const Cards: FC<ICardsProps> = ({ data }: ICardsProps) => {

  const history = useHistory();
  const onEditHandler = () => history.push(`/edit/22`);

  const renderCards =
    data.map(({ title, descr, dateEnd, status }: ICard): JSX.Element => (
      <Box sx={{ width: "22rem" }}>
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
                color={status === 2 ? "success" : status === 1 ? "primary" : "info"}
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