import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { Chip } from '@mui/material';
import { ICard } from '../../api';

interface ICardsProps {
  data: ICard[],
}

export const Cards: FC<ICardsProps> = ({ data }: ICardsProps) => {

  const history = useHistory();
  const onEditHandler = () => history.push(`/edit/22`);

  const renderCards =
    data.map((item: ICard): JSX.Element => (
      <Box sx={{ width: 300 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              ИПР (индивидуальный план развития)
            </Typography>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Срок окончания: {item.dateEnd}
            </Typography>
            <Typography variant="body2">
              {item.descr}
            </Typography>
          </CardContent>
          {item.status !== 2 &&
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
    <React.Fragment>
      {renderCards}
    </React.Fragment>
  );
};