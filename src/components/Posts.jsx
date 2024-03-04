import Image from "next/image";
import Link from "next/link";

export default function Posts ({ item }) {
    return (
        <div className="col-12 col-sm-6">
            <div className="single-blog-post style-2 mb-5">
                <div className="blog-thumbnail">
                    <Link href={`/${item.category}/${item.id}`}>
                        <Image
                            src={item.image || '/none-image.webp' } 
                            alt={item.title}
                            width={800}
                            height={400}
                            quality={100}
                            layout='responsive'
                            priority
                        />
                    </Link>
                </div>
                <div className="blog-content">
                    <span className="post-date">{item.createdAt}</span>
                    <a href="#" className="post-title">
                        { item.title }
                    </a>
                </div>
            </div>
        </div>
    )
}