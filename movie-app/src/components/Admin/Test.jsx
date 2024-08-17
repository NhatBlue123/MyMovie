// Test.jsx
import React, { useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from './Config.js';  // Importing the default export correctly

const Test = () => {
  const db = getFirestore(app);

  // Fetch data inside useEffect to avoid unnecessary re-renders
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "admin"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    }
    getData();
  }, [db]);

  return (
    <div>
      Hi
    </div>
  )
}

export default Test;
