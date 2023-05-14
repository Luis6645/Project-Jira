import { FC, DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography } from '@mui/material';

import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';
import { useRouter } from 'next/router';
import { dateFuncions } from '../../utils';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setIsAddingDragging } = useContext(UIContext)
    const router = useRouter();

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id);

        //TODO: modificar el estado, para indicar que estoy haciendo Darg

        setIsAddingDragging(true);
    }

    const onDragEnd = () => {
        //TODO: Fin del Darg
        setIsAddingDragging(false);
    }

    const onClink = () => {
        router.push(`/entries/${entry._id}`);
    }

    return (
        <Card
            onClick={onClink}
            sx={{ marginBottom: 1 }}
            // Eventos de Arrastrar y soltar
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >

            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant="body2">{dateFuncions.getFormatDistanceToNow(entry.createdAt)}</Typography>
                </CardActions>
            </CardActionArea>

        </Card>

    )
};
