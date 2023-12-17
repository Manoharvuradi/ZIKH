import Button from 'Y/common/buttons/filledButton';
import React from 'react'
interface IModal {
    addDataModel: boolean;
    setAddDataModel: (open: boolean) => void;
}
function ShowDataAddModel({
    addDataModel,
    setAddDataModel
}: IModal) {
    console.log("addDataModel", addDataModel);
    return (
        <>
            {addDataModel && (
                <div className={`${addDataModel ? "w-[40%]" : "w-0"
                    } overflow-hidden transition-all duration-500`}>
                    <p>This is test data</p>
                </div>
            )}
            <Button
                text={"Close"}
                onClick={() => setAddDataModel(false)}
            />

        </>
    )
}

export default ShowDataAddModel;