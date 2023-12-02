import axios from "axios";
import {dataIsFetching, dataFetched, dataFetchingError} from "../reducers/dataReducer"

export async function fetchUserList(dispatch) {
       dispatch(dataIsFetching(true));
    try{
             const res = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
              dispatch(dataFetched(res.data));
    }
    catch(err)
    {
        dispatch(dataFetchingError());
        dispatch(dataIsFetching(false));
    }
}