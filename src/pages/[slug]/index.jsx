import Posts from "@/components/Posts";
import { getPostBySlug } from "../api/posts";

export default function Index ({ posts }) {
    console.log(posts)
    return (
        <div className="header-area">
            <div className="newsbox-main-menu" style={{ height : "auto" }}>
                <div className="container-fluid">
                    <div className="row">
                        {
                            posts.data.map((item , index) => (
                                <Posts item={item} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
}

export async function getServerSideProps (ctx) {
    const slug = ctx.query.slug;
    const posts = await getPostBySlug(slug);
    return {
        props : {
            posts : posts
        }
    }
}

