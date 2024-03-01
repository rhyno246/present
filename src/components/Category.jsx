export default function Category () {
    return (
        <div className="col-12 col-sm-6">
            <h6 className="mb-4">Category 1</h6>
            <div className="single-blog-post style-2 mb-5">
                <div className="blog-thumbnail">
                    <a href="#">
                        <img src="/bg-img/14.jpg" alt="" />
                    </a>
                </div>
                <div className="blog-content">
                    <span className="post-date">June 20, 2018</span>
                    <a href="#" className="post-title">
                        Elon Musk: Tesla worker admitted to sabotage
                    </a>
                    <a href="#" className="post-author">
                        By Michael Smith
                    </a>
                </div>
            </div>
            <div className="single-blog-post d-flex style-4 mb-30">
                <div className="blog-thumbnail">
                    <a href="#">
                    <img src="/bg-img/16.jpg" alt="" />
                    </a>
                </div>
                <div className="blog-content">
                    <span className="post-date">June 20, 2018</span>
                    <a href="#" className="post-title">
                    Nearly a quarter have no emergency savings
                    </a>
                </div>
            </div>
        </div>
    )
}