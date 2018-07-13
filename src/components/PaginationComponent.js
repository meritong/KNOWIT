import React, {Component} from 'react'; 


class Pagination extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            data: {} 
        };
    }

    componentDidUpdate(lastProps) {
        if (this.props.items !== lastProps.items) {
            this.Page(this.props.initialPage);
        }
    }

    Page(page) {
        var { items, apiRows } = this.props;
        var data = this.state.data;

        if (page < 1 || page > data.totPages) {
            return;
        }

        data = this.Paginering(items.length, page, apiRows);
        console.log(data);
        var pageOfItems = items.slice(data.startI, data.endI);
        
        this.setState({ data: data });

        this.props.PageChange(pageOfItems);
    }

    Paginering(apiItems, currPage, apiRows) {

        currPage = currPage || 1;
        apiRows = 20;

        var totPages = Math.ceil(apiItems / apiRows);

        var start = 1;
        var end = totPages;
        
        var startI = (currPage - 1) * apiRows;
        var endI = Math.min(startI + apiRows, apiItems);

        var pages = [...Array((end + 1) - start).keys()].map(i => start + i);

        return {
            apiItems: apiItems,
            currPage: currPage,
            apiRows: apiRows,
            totPages: totPages,
            start: start,
            end: end,
            startI: startI,
            endI: endI,
            pages: pages
        };
    }

    render() {
        var data = this.state.data;
        
        if (!data.pages || data.pages.length <= 1) {
            // don't display data if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination">
                <li>
                    <a onClick={() => this.Page(data.currPage - 1)}> {"<"} </a>
                </li>
                {data.pages.map((page, index) =>
                    <li key={index} className={data.currPage === page ? 'active' : ''}>
                        <a onClick={() => this.Page(page)}>{page}</a>
                    </li>
                )}
                <li>
                    <a onClick={() => this.Page(data.currPage + 1)}>{">"}</a>
                </li>
            </ul>
        );
    }
}

export default Pagination;