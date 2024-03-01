import Image from "next/image"
import Link from "next/link"

export default function HotPost ({ data }) {
    return (
        <div className="hero-post-slides owl-carousel">
            {/* Single Slide */}
            <div className="single-slide">
                <div className="container-fluid">
                    <div className="block hot-news">
                    {/* Single Blog Post Area */}
                        {
                            data && data.map((item, index) => {
                                if(index === 0){
                                    return (
                                        <div className="hot-news-item" key={index}>
                                            <div
                                                className="single-blog-post style-1"
                                            >
                                                {/* Blog Thumbnail */}
                                                <div className="blog-thumbnail bg-overlay">
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
                                                {/* Blog Content */}
                                                <div className="blog-content news-item">
                                                    <span className="post-date">{ item.createdAt }</span>
                                                    <Link href={`/${item.category}/${item.id}`} className="post-title">
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div className="news-item" key={index}>
                                        {/* Single Blog Post Area */}
                                        <div
                                            className="single-blog-post style-1 mb-30"
                                        >
                                        {/* Blog Thumbnail */}
                                            <div className="blog-thumbnail bg-overlay">
                                                <Link href={`/${item.category}/${item.id}`}>
                                                    <Image
                                                        src={item.image || '/none-image.webp' } 
                                                        alt={item.title}
                                                        width={800}
                                                        height={200}
                                                        quality={100}
                                                        layout='cover'
                                                        priority
                                                    />
                                                </Link>
                                            </div>
                                            {/* Blog Content */}
                                            <div className="blog-content">
                                                <span className="post-date">{item.createdAt}</span>
                                                <Link href={`/${item.category}/${item.id}`} className="post-title">
                                                    {item.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}