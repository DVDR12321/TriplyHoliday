import { Grid } from '@mui/material';
import { getAllCollectionDocuments, setNewDocument } from '../../firebase/firebase';
import { useEffect, useState } from 'react';

import type { Arrangement } from '../../types';
import { ArrangementsCard } from './ArrangementsCard';

export const ArrangementsPage = () => {
    const [documents, setDocuments] = useState<Arrangement[]>([]);

    const loadDocuments = async () => {
        const documents = await getAllCollectionDocuments("arrangements");
        setDocuments(documents);
    }

    setNewDocument();
    useEffect(() => {
        loadDocuments();
    }, []);


    return (
        <Grid container spacing={2} sx={{ width: "100vw" }} >
            <Grid size={2} />
            {documents.map((document, id) => {

                if (!document.available) return null;

                return (
                    <>
                        <Grid size={6} key={id}>
                            <ArrangementsCard {...document} />
                        </Grid>
                        <Grid size={4} />
                        <Grid size={2} />
                    </>
                )

            })}

        </Grid>
    )
}