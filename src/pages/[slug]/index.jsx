import Category from "@/components/Category";
import HotPost from "@/components/HotPost";
import { getHotPost } from "../api/posts";
import { getMenu } from "../api/menu";

export default function Index ({ posts, category }) {
    const { data } = posts;
    return (
        <div className="hero-area">
            <HotPost data={data}/>
            <section className="intro-news-area section-padding-100-0 mb-70">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-lg-8">
                            <div className="row">
                                {
                                    category && category.map((item, index) => (
                                        <Category key={index} />
                                    ))
                                }
                                
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

export async function getServerSideProps (context) {
    const data = await getHotPost();
    const category = await getMenu();
    return {
        props : {
            posts : data,
            category : category.data
        }
    }
}

