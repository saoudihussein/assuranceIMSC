import React from "react";
import Layout from '../layout/layout';
import './blog-single.css';
import parse from 'html-react-parser';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';


function BlogPage(props) {
    const { content } = props.pageContext
    const { title } = props.pageContext
    const { titleMeta } = props.pageContext;
    const { metaDesc } = props.pageContext;


    return (
        <Layout>

            <Helmet htmlAttributes={{
                lang: 'fr-FR',
            }}>
                <link rel="icon" type="image/x-icon" href={favicon} />
                <title>{titleMeta}</title>
                <meta name="description" content={metaDesc} />
                <meta name="robots" content="index, follow" />
            </Helmet>


            <div className="container-fluid banner mt-3 mb-5 pb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center text-uppercase">
                            <h1>BLOG</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="entry-title justify-content-start">
                            {parse(title)}
                        </h1>

                        {parse(content)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default BlogPage;