const tableTemplate = `
import React from 'react';
import <%=entity%>List from './<%=entity%>List.js';
import <%=entity%>Service from '../../services/<%=entity%>/<%=entity%>Service.js';
class <%=entity%>Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data:[], isFetching:true}
	}

	componentDidMount() {
		<%=entity%>Service.findAll<%=entity%>()
		.then(data => this.setState({data:data, isFetching:false}));
	}

	render() {
        return <div> 
                {this.state.isFetching && <h3> Fetching data... </h3>}
		        {!this.state.isFetching && <<%=entity%>List data={this.state.data}/>}
               </div>
	}
}
export default <%=entity%>Table;
`;

const listTemplate = `
import React from 'react';
import <%=entity%>Editor from './<%=entity%>Editor.js';

const tableStyle = {
    width:'100%',
    border: '1px solid black',
    borderCollapse: 'collapse'
}

const rowStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: '15px'
}

const <%=entity%>List = ({data}) => {

    const renderData = (input) => {
        return input.map((d) => {
            return <tr>
            <% for (let i = 0; i < entityFields.length; i++) { %>
            <td style={rowStyle}>{d.<%=entityFields[i]['name']%>}</td>
            <% } %>
            <td style={rowStyle}>
                <button style={{margin:'10px'}}>Delete</button>
                <button>Update</button>
            </td>
        </tr>
        });
    }
    
    return <div>
        <table id="table" style={tableStyle}>
            <tr>
                <% for (let i = 0; i < entityFields.length; i++) { %>
                <th style={rowStyle}><%=entityFields[i]['name']%></th>
                <% } %>
                <th style={rowStyle}>Operation</th>
            </tr>
            {renderData(data)}
        </table>
    </div>
}
    
export default <%=entity%>List;
`;
const editorTemplate = `
import React from 'react';
const <%=entity%>Editor = ({delete<%=entity%>, update<%=entity%>}) => 
	<div>
		<button onClick={delete<%=entity%>}>Delete</button>
		<button onClick={update<%=entity%>}>Update</button>
	</div>
export default <%=entity%>Editor;
`;


module.exports = {tableTemplate, listTemplate, editorTemplate};
