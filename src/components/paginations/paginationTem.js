import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './paginationTem.css';


export default function PaginationTem(props) {

    const [isPrevious, setIsPrevious] = useState(false);


    function paginationButton(e, item) {
        const itemsPag = [...document.querySelectorAll("li.page-item")];

        itemsPag.map((item) => {
            item.className = "page-item";
        })

        if (item == 1) {
            setIsPrevious(false);
        }
        else {
            setIsPrevious(true);
        }
        e.currentTarget.className = "page-item active";
    }

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center">

                {
                    isPrevious && <li onClick={paginationButton} className="page-item"><a onClick={props.previousPage} className="page-link" href="#!"><FaAngleLeft /> </a></li>
                }
                {props.pageNumber.map((item) => {

                    if (item == 1) {
                        return <li onClick={(e) => paginationButton(e, item)} key={item} className={"page-item " + (!isPrevious && 'active')}><a onClick={() => props.paginate(item)} className="page-link" href="#!">{item}</a></li>
                    } else {
                        return <li onClick={(e) => paginationButton(e, item)} key={item} className="page-item"><a onClick={() => props.paginate(item)} className="page-link" href="#!">{item}</a></li>
                    }


                })
                }
                <li onClick={paginationButton} className="page-item "><a onClick={props.nextPage} className="page-link" href="#!"><FaAngleRight /></a></li>
            </ul>
        </nav>
    )
}