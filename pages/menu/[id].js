import { useRouter } from 'next/router';
import React from 'react';
import DetailsPage from '../../components/templates/DetailsPage';
const Details = ({data}) => {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>;
    }
    return (
        <DetailsPage data={data} {...data} />
    );
};

export default Details;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
    const newData = data.slice(0,10)
    const paths = newData.map(item => ({
        params: {id: item.id.toString()}
    }))
    return{
        paths,
        fallback : true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const response = await fetch(`${process.env.BASE_URL}/data/${params.id}`)
    const data = await response.json()
    if(!data.id){
        return{
            notFound: true,
        }
    }

    return{
        props:{
            data,
            revalidate: +process.env.REVALIDATE
        },
    }
}