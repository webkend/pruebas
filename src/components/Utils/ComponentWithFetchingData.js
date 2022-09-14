import React, { useState } from 'react';
import Loading from './getLoading';

const ComponentWithFetchingData = ({ request, render }) => {
    const [state, setState] = useState(() => ({
		loading: true,
		sdata: [],
		error: null,
	}));
    
    request.then((data) => {

        setState({
            loading: false,
            sdata: data
        })

    })

    return (
        <>
        {/* {state.loading && <Loading />}
        {render(state.sdata)} */}
        {state.loading ? <Loading /> : render(state.sdata)}
        </>
    )

}

export default ComponentWithFetchingData;