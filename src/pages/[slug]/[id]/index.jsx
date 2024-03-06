import { getPrams, getPostById } from "@/pages/api/posts";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";


export default function Index ({ data }) {
    const router = useRouter();
    console.log(router.isFallback)
    if(router.isFallback){
        return (
            <p>loading..........</p>
        )
    }
    return (
        <div className="post-detail">
            <div className="img">
                <Image
                    src={data.image || '/none-image.webp' } 
                    alt={data.title}
                    width={500}
                    height={400}
                    quality={100}
                    layout='responsive'
                />
            </div>
            <div className="container">
                <h1 className="mt-4">{ data.title }</h1>
                <p className="user-post mb-0">
                    Author : { data.firstName } { data.lastName } 
                </p>
                <p className="date mb-4">
                    Create date : {moment(data.createdAt).format("DD-MM-YYYY")}
                </p>
                <div className="content-detail" dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    const paths = await getPrams();
    return { 
        paths,
        fallback : true
    }
}
export async function getStaticProps (ctx) {
    const {slug , id} = ctx.params
	const post = await getPostById(slug , id);
	return {
        props: { data : post.data },
		revalidate: 1
	}
}
