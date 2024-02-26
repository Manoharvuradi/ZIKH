import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export async function crimeCMSClient(
    url: string,
    method: "get" | "post" | "put" | "delete" | "patch",
    payload: any,
    responseType?: "json"
){
    const clientHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CRIME_CMS_TOKEN}`
    };
    const config: AxiosRequestConfig = {
        method: method,
        url: url,
        baseURL: process.env.NEXT_PUBLIC_CONTENT_URL,
        headers: clientHeaders,
        data: payload,
        responseType: responseType,
    };
    const response: AxiosResponse = await axios(config);
    return response;
}