import { getAllPostIds, getPostById } from "@/pages/api/posts";


export default function Index ({ post }) {
    console.log(post)
    return (
        <div className="post-detail">
            adsdassad
        </div>
    )
}
export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return { paths, fallback: false }
}


export async function getStaticProps ({ params }) {
    console.log(params)
	const post = await getPostById(params.id, params.category)
	return {
        props: {
            post
		},
		revalidate: 1
	}
}
