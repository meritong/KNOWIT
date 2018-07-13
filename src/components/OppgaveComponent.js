import React, {Component} from 'react';
import { Table  } from 'reactstrap';
import Pagination from './PaginationComponent';

class Oppgave extends Component {


    constructor(props) {
        super(props);

        this.state = {
            items: [],
            pageItems: []
        };

        this.PageChange = this.PageChange.bind(this);

    }

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
          .then(response => response.json())
          .then(data => this.setState({ items: data.items }));
    }

    PageChange(pageItems) {
        this.setState({ pageItems: pageItems });
    }

    render() {

        return (
            <div>
                <div className="container">
                    <Table responsive className="table-hover">
                    <thead>
                      <tr className='text-center'>
                        <th>ID</th>
                        <th>API Navn</th>
                        <th>URL</th>
                        <th>Antall saker</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.pageItems.map((item, i) => 
                        <tr key={i} className="text-center">
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.owner.url}</td>
                            <td>{item.open_issues}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                  <Pagination items={this.state.items} PageChange={this.PageChange} />
                </div>
            </div>
        );
    }
}

                      

export default Oppgave;