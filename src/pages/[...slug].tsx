import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Repo = {
    name: string
    stargazers_count: number
}

export const getStaticPaths = (async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
})
export const getStaticProps = (async () => {
    return {
        notFound: true,
    }
})

export default function Page() {
    return <p>hello world!</p>
}