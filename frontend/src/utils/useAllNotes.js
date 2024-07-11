import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAllNotes = () => {
  const[notes,setNotes] = useState();

  useEffect(()=>{
        const fetchNotes = async() => {
            try {
                const response = await axios.get("http://localhost:8182/api/notes/all");
                console.log(response.data);
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching files', error);
            }
        };

        fetchNotes();
  },[])

  return notes;
}

export default useAllNotes