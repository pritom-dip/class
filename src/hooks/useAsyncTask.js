import axios from "axios";
import { useEffect, useState } from "react";

const useAsyncTask = (url = "") => {
    const [isLoading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(url);
                setDatas(data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return {
        datas,
        isLoading,
    };
};

export default useAsyncTask;
