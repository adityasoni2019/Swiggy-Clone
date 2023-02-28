import React from 'react'

const Shimmer = () => {
    // return <h1>Shimmer UI Loading.........</h1>;
    return (
        <>
            {/* <h1>hello</h1> */}
            <div data-testid="shimmer" className="flex flex-wrap">
                {Array(12)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="w-[200px] h-[200px] border border-gray-900 m-10 "></div>
                ))}
                
            </div>
        </>
    );
};

export default Shimmer;
