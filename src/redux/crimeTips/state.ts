export interface ICrimeTip {
    location: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longtitude: number;
    tip:string;
    personalInfo: string;
    addtionalInfo: string;
}

export const initCrimeTipState: ICrimeTipState = {
    crimeTip: null,
    crimeTipLoading: false,
    crimeTipFailed: false,
    crimeTipSuccess: false,
    getCrimeTipAlertMessage: "",
};

export interface ICrimeTipState {
    crimeTip: ICrimeTip | any;
    crimeTipLoading: boolean;
    crimeTipFailed: boolean;
    crimeTipSuccess: boolean;
    getCrimeTipAlertMessage: string;
}