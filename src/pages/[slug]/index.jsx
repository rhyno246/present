export default function Index () {
    return (
        <div className="hero-area">
        {/* Hero Post Slides */}
        <div className="hero-post-slides owl-carousel">
            {/* Single Slide */}
            <div className="single-slide">
            <div className="container-fluid">
                <div className="row">
                {/* Single Blog Post Area */}
                <div className="col-12 col-md-6">
                    <div
                    className="single-blog-post style-1"
                    >
                    {/* Blog Thumbnail */}
                    <div className="blog-thumbnail bg-overlay">
                        <a href="#">
                        <img src="/bg-img/1.jpg" alt="" />
                        </a>
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content">
                        <span className="post-date">June 20, 2018 adssd</span>
                        <a href="#" className="post-title">
                        Traffic Problems in Time Square
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    {/* Single Blog Post Area */}
                    <div
                    className="single-blog-post style-1 mb-30"
                    >
                    {/* Blog Thumbnail */}
                    <div className="blog-thumbnail bg-overlay">
                        <a href="#">
                        <img src="/bg-img/2.jpg" alt="" />
                        </a>
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="#" className="post-title">
                        The best way to spend your holliday
                        </a>
                    </div>
                    </div>
                    {/* Single Blog Post Area */}
                    <div
                    className="single-blog-post style-1"
                    >
                    {/* Blog Thumbnail */}
                    <div className="blog-thumbnail bg-overlay">
                        <a href="#">
                        <img src="/bg-img/3.jpg" alt="" />
                        </a>
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content">
                        <span className="post-date">June 20, 2018</span>
                        <a href="#" className="post-title">
                        Sport results for the weekend games
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>



        <section className="intro-news-area section-padding-100-0 mb-70">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 col-lg-8">
                        <div className="row">
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
                            <div className="col-12 col-sm-6">
                                <h6 className="mb-4">Category 2</h6>
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
                    </div>
                </div>
                <div className="col-12 col-sm-9 col-md-6 col-lg-4">
                    <div className="sidebar-area">
                        <div className="single-widget-area newsletter-widget mb-30">
                            <h4>Subscribe to our newsletter</h4>
                            <form action="#" method="post">
                            <input
                                type="email"
                                name="nl-email"
                                id="nlemail"
                                placeholder="Your E-mail"
                            />
                            <button type="submit" className="btn newsbox-btn w-100">
                                Subscribe
                            </button>
                            </form>
                            <p className="mt-30">
                            Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue
                            condimentum. Etiam pretium turpis eget nibh . volutpat lobortis.
                            </p>
                        </div>
                        <div className="single-widget-area add-widget mb-30">
                            <a href="#">
                            <img src="/bg-img/add3.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    );
}

