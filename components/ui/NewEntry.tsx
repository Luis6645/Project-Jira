import { useState, ChangeEvent, useContext } from 'react';
import { Button, Box, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);

    const { setIsAddingEntry,isAddingEntry } = useContext(UIContext);

    const [inputValue, setInputValue] = useState('');

    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }


    const onSave = () => {
        if (inputValue.length === 0) return;

        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry
                    ? (
                        <>
                            <TextField
                                fullWidth
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                placeholder='Nueva entrada'
                                multiline
                                autoFocus
                                label="Nueva entrada"
                                helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
                                error={inputValue.length <= 0 && touched}
                                value={inputValue}
                                onChange={onTextFieldChanged}
                                onBlur={() => setTouched(true)}
                            />

                            <Box display='flex' justifyContent='space-between'>

                                <Button
                                    variant='text'
                                    onClick={() => setIsAddingEntry(false)}
                                >
                                    Cancelar
                                </Button>

                                <Button
                                    variant='outlined'
                                    color='secondary'
                                    endIcon={<SaveOutlinedIcon />}
                                    onClick={onSave}
                                >
                                    Guardar
                                </Button>
                            </Box>
                        </>
                    )
                    : (
                        <Button
                            startIcon={<AddCircleOutlineIcon />}
                            fullWidth
                            variant="outlined"
                            onClick={() => setIsAddingEntry(true)}
                        >
                            Agregar Tarea
                        </Button>
                    )
            }

        </Box>
    )
}
