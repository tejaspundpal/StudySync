import { useState, useEffect } from 'react';
import axios from 'axios';

const useAllNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:8182/api/notes/all');
                console.log(response.data)
                setNotes(response.data);
                setLoading(false);
            } catch (error) {
                console.error("There was an error fetching the notes!", error);
                setLoading(false);
            }
        };
        
        fetchNotes();
    }, []);

    return { notes, loading };
};

export default useAllNotes;
