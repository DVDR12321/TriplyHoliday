import { Button } from '@mui/material';
import { setNewDocument, getAllCollectionDocuments } from '../../friebase/firebase';
import ArrangementsCard from './ArrangementsCard';


function ArrangementsPage() {

    const handleClick = () => {
        getAllCollectionDocuments();
    }
    setNewDocument();
    return (
        <div style={{ margin: '0 1vw 0 1vw' }}>
            <ArrangementsCard></ArrangementsCard>
            <Button onClick={handleClick}>
                Get Data
            </Button>
        </div>


    )
}

export default ArrangementsPage;