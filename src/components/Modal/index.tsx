import React from 'react'
interface IModal {
    addDataModel: any;
}
function ShowDataAddModel({
    addDataModel
}: IModal) {
    return (
        <>
            {addDataModel && (
                <div className={`${addDataModel ? "w-[40%]" : "w-0"
                    } overflow-hidden transition-all duration-500`}>
                    <p>This is test data</p>
                </div>
            )}
        </>
    )
}

export default ShowDataAddModel;