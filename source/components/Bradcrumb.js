import React from "react"
import { Link } from 'react-router-dom';

export default ({ content }) => (
    <div className="breadcrumbs">
        {content.map((item, k) => {

            const last = k == (content.length - 1);

            return (
                <React.Fragment key={k}>
                    <Link to={item.link} rel="noopener" className={last ? "is-active" : ""}>{item.name}</Link>
                    {!last &&
                        <div className="slash">/</div>
                    }
                </React.Fragment>
            )
        })}
    </div>
)

