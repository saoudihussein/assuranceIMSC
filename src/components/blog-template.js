import React, { useState } from 'react';
import Layout from '../layout/layout';
import './blog-template.css'
import parse from 'html-react-parser';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'gatsby';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Helmet from 'react-helmet';




export default function BlogPage(props) {

    const { data } = props.pageContext;
    const { indice } = props.pageContext
    const pageNumber = [];

    for (let index = 1; index <= Math.ceil(data.nodes.length / 3); index++) {
        pageNumber.push(index);
    }

    const thenum = (props.location.pathname).match(/\d+/)[0] // "3"
    const [title] = useState("Blog - Page " + thenum + " sur " + pageNumber.length + " - www.assurance.tn");

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
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
                        {(() => {
                            const tab = [];
                            if (indice === 6) {
                                var i = indice + 2;
                            } else if (indice === 3) {
                                var i = indice + 3;
                            }

                            for (let index = indice; index < i; index++) {
                                tab.push(<div className="d-flex justify-content-center">
                                    <div className='row mb-3'>
                                        {data.nodes[index] !== 'undefined' && data.nodes[index].featuredImage ?
                                            <>
                                                <div className='col-3'>
                                                    <Link className="btn " aria-current="page"
                                                        to={data.nodes[index].uri}>
                                                        <img style={{ height: '190px', width: '300px' }} src={data.nodes[index].featuredImage.link} className="img-fluid rounded" alt={data.nodes[index].title} />
                                                    </Link>
                                                </div>

                                                <div className='col-9'>
                                                    <div className="card">
                                                        <div className="card-body">

                                                            <Link className="text-decoration-none" aria-current="page"
                                                                to={data.nodes[index].uri}>
                                                                <h5 className="card-title-blog">{data.nodes[index].title}</h5>
                                                            </Link>
                                                            <div className="card-text-blog">{parse(data.nodes[index].excerpt)}</div>
                                                            <Link className="btn btn-primary-blog" aria-current="page"
                                                                to={data.nodes[index].uri}>
                                                                Learn more &nbsp;<AiOutlineArrowRight />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>  </>



                                            : <div className='col-12'>
                                                <div className="card">
                                                    <div className="card-body">

                                                        <Link className="text-decoration-none" aria-current="page"
                                                            to={data.nodes[index].uri}>
                                                            <h5 className="card-title-blog">{data.nodes[index].title}</h5>
                                                        </Link>
                                                        <div className="card-text-blog">{parse(data.nodes[index].excerpt)}</div>
                                                        <Link className="btn btn-primary-blog" aria-current="page"
                                                            to={data.nodes[index].uri}>
                                                            Learn more &nbsp;<AiOutlineArrowRight />
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>}


                                    </div>
                                </div>)


                            }
                            return tab;

                        })()}

                    </div >
                </div >
            </div >

            <div className="container-fluid mb-5 pb-5">
                <nav aria-label="...">
                    <ul className="pagination justify-content-center">

                        {
                            <li className="page-item"><Link className="page-link"
                                to={parseInt(thenum) == 2 ? '/blog/' : '/blog/page/' + (parseInt(thenum) - 1) + "/"}
                            ><FaAngleLeft />
                            </Link>
                            </li>
                        }

                        {pageNumber.map((item) => {

                            if (item === 1) {
                                return <li key={item} > <Link className="page-link" to={'/blog/'}>{item}</Link></li>
                            } else {
                                if (parseInt(thenum) == item) {
                                    return <li key={item} className="active" > <Link style={{ color: "white" }} className="page-link" to={'/blog/page/' + item}>{item}</Link></li>
                                }
                                return <li key={item} > <Link className="page-link" to={'/blog/page/' + item}>{item}</Link></li>
                            }


                        })
                        }

                        {parseInt(thenum) < pageNumber.length ? <li className="page-item"><Link className="page-link" to={'/blog/page/' + (parseInt(thenum) + 1) + "/"}><FaAngleRight />
                        </Link>
                        </li> : null}

                    </ul>
                </nav>
            </div>


        </Layout >
    )
}