import React, { useState, useEffect } from 'react';

function ClientNumber() {
    const [clientCount, setClientCount] = useState(0);
    const [serviceCount, setServiceCount] = useState(0);
    const [workCount, setWorkCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (clientCount < 200) {
                setClientCount(prevCount => prevCount + 2);
            }
            if (serviceCount < 400) {
                setServiceCount(prevCount => prevCount + 4);
            }
            if (workCount < 470) {
                setWorkCount(prevCount => prevCount + 5);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [clientCount, serviceCount, workCount]);

    return (
        <>
            <div style={{ height: "400px" }} className='backgraundimage'>
                <div style={{ height: "100%" }} className='container-fluid'>
                    <div style={{ height: "100%" }} className='row col-sm-12 gap-5 text-light  align-items-center justify-content-center'>
                        <div className='col-sm-3  text-center m-auto '>
                            <p className='fs-4' >client: <span>{clientCount}</span></p>
                        </div>
                        <div className='col-sm-3 text-center m-auto '>
                            <p  className='fs-4' >service: <span>{serviceCount}</span></p>
                        </div>
                        <div className='col-sm-3 text-center m-auto'>
                            <p className='fs-4' >work: <span>{workCount}</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientNumber;
