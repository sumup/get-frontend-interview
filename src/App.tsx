import React from 'react';
import './App.css'
import Filters from "./components/Filters";

const App: React.FC = () => {
    const onboardings = [];

    return (
        <div>
            <h1>Onboardings List</h1>
            <Filters />
            {onboardings.length ? (
                <div>This should be a table</div>
            ) : (
                <>
                    No onboardings found
                </>
            )}
        </div>
    );
};

export default App
