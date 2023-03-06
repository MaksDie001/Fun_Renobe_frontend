import React from 'react';
import "./One_renobe.scss"
import Services from "../../services/services";

const Renobe=new Services()
class One_renobe extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            renobe:[],
            chapter_list:[]
        }
    }
    componentDidMount() {
        Renobe.Get_renobe(document.location.pathname)
            .then(renobe => {
            this.setState(() => {
                return {
                    renobe,
                };
            });
        });
        Renobe.Get_renobe(`chapter/${document.location.pathname.slice(8)}`)
            .then(chapter_list => {
                this.setState(() => {
                    return {
                        chapter_list,
                    };
                });
            });
    }

    render() {
        return (
            <div className={"col-11"}>

                {this.state.chapter_list.map(res=>{
                    return(
                        <div>
                            {res.chapter_number}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default One_renobe