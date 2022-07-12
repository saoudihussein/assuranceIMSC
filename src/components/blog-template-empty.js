import React, { useState } from 'react';
import Layout from '../layout/layout';
import './blog-template.css'
import parse from 'html-react-parser';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';



export default function BlogPage(props) {
    const [postsPerPage] = useState(3);


    const { data } = props.pageContext
    const postNumber = [];
    const posts = [];

    for (let index = 1; index <= Math.ceil(data.nodes.length / postsPerPage); index++) {
        postNumber.push(index);
    }

    for (let index = 0; index <= 2; index++) {
        posts.push(data.nodes[index]);
    }

    return (
        <Layout>

            <Helmet htmlAttributes={{
                lang: 'fr-FR',
            }}>
                <link rel="icon" type="image/x-icon" href={favicon} />
                <title>Blog - www.assurance.tn</title>
                <meta name="robots" content="index, follow" />
            </Helmet>


            <div className="container-fluid banner mt-3 mb-1 pb-5 pt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="text-center text-uppercase">
                            <h1>BLOG</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12">
                        {posts.map((item) => {
                            return (
                                <div className="d-flex justify-content-center">
                                    <div className='row mb-3'>
                                        {item.featuredImage ?
                                            <>
                                                <div className='col-3'>
                                                    <Link className="btn " aria-current="page"
                                                        to={item.uri}>
                                                        <img style={{ height: '190px', width: '300px' }} src={item.featuredImage.link} className="img-fluid rounded" alt={item.title} />
                                                    </Link>
                                                </div>
                                                <div className='col-9'>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <Link className="text-decoration-none" aria-current="page"
                                                                to={item.uri}>
                                                                <h5 className="card-title-blog">{item.title}</h5>
                                                            </Link>
                                                            <div className="card-text-blog">{parse(item.excerpt)}</div>
                                                            <Link className="btn btn-primary-blog" aria-current="page"
                                                                to={item.uri}>
                                                                Learn more &nbsp;<AiOutlineArrowRight />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>

                                            : <div className='col-12'>
                                                <div className="card">
                                                    <div className="card-body">

                                                        <Link className="text-decoration-none" aria-current="page"
                                                            to={item.uri}>
                                                            <h5 className="card-title-blog">{item.title}</h5>
                                                        </Link>
                                                        <div className="card-text-blog">{parse(item.excerpt)}</div>
                                                        <Link className="btn btn-primary-blog" aria-current="page"
                                                            to={item.uri}>
                                                            Learn more &nbsp;<AiOutlineArrowRight />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                            )
                        })}

                    </div >
                </div >
            </div >

            <div className="container-fluid mb-5 pb-5">
                <nav>
                    <ul className="pagination justify-content-center">

                        {postNumber.map((item) => {

                            if (item == 1) {
                                return <li key={item} className="active" >
                                    <Link style={{ color: 'white' }} className="page-link activeLi" to={'/blog/'}>{item}</Link>
                                </li>
                            } else {
                                return <li key={item} >
                                    <Link className="page-link" to={'/blog/page/' + item}>{item}</Link>
                                </li>
                            }
                        })
                        }
                        <li className="page-item ">
                            <Link className="page-link" to={'/blog/page/2/'}><FaAngleRight /></Link>
                        </li>
                    </ul>
                </nav>
            </div>


        </Layout >
    )
}