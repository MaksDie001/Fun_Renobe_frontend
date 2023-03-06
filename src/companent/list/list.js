import React from 'react';
import "./list.scss"
import Renobe_clock from "../Renobe_clock/Renobe_clock";
import { Link } from "react-router-dom";
import {FiHeart} from "react-icons/fi"
import {RiDislikeLine} from "react-icons/ri"
class List extends React.Component{
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div className="col-11 content">
                <div className={"hz"}></div>
                {this.props.data.map(res=>{
                    return(
                        <div className={"renobe_cart row"} key={res.id}>
                            <div className={"col-3"}><img src={res.renobe.renobe_img} width={180} height={250} className={" renobe_img"}/>
                                <Link to={`renobe/${res.renobe.slug}`} className={"renobe_link"}>читать</Link>
                            </div>
                            <div className={"cart_inherit col-9"}><h2><Link to={`renobe/${res.renobe.slug}`} className={"renobe_name"}>{res.renobe.renobe_name}</Link></h2>
                            <p className={"chapters"}>Глава {res.chapter_number}</p>
                                <p className={"chapter_name"}>{res.chapter_title}</p>
                                <p className={"renobe_descriptor"}>{res.renobe.renobe_title}</p>
                                <Renobe_clock time={res.date_time} />
                                <div className={"like_div"}>
                                <RiDislikeLine className={"dislike"}/>
                                    <FiHeart className={"like"}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List