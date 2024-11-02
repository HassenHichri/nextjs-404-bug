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
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { revalidate: 1, props: { repo } }
})

export default function Page({
                                 repo,
                             }: InferGetStaticPropsType<typeof getStaticProps>) {
    return repo.stargazers_count
}