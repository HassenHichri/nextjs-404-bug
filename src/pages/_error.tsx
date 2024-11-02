import {GetServerSidePropsContext} from "next";

function Error({ statusCode }: {statusCode: number}) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

export async function  getServerSideProps({ res }: GetServerSidePropsContext) {
    const statusCode = res ? res.statusCode : 404;
    return { props: {statusCode }}
}

export default Error