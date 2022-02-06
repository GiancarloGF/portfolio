import {  useState } from 'react';
import { useRouter } from "next/router";

const usePath = () => {
    const router = useRouter();

	const [path, setPath] = useState(router.asPath);

	return { path };
};

export default usePath;
