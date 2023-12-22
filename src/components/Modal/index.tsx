import Button from 'Y/common/buttons/filledButton';
import React from 'react'
interface IModal {
    locationDetails:any,
    addDataModel: boolean;
    setAddDataModel: (open: boolean) => void;
}
function ShowDataAddModel({
    locationDetails,
    addDataModel,
    setAddDataModel
}: IModal) {
    return (
        <>
            {addDataModel && (
                <div className={`${addDataModel ? "w-[40%]" : "w-0"
                    } overflow-hidden transition-all duration-500`}>
                    <p>{locationDetails?.country}</p>
                    <p>{locationDetails?.city}</p>
                    <Button
                        text={"Close"}
                        onClick={() => setAddDataModel(false)}
                    />
                </div>
            )}
        </>
    )
}

export default ShowDataAddModel;