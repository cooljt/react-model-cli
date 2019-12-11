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
                {isFetching && <h3> Fetching data... </h3>}
		        {!isFetching && <<%=entity%>List data={this.state.data}/>}
               </div>
	}
}
export default <%=entity%>Table;
`;

const listTemplate = `
import React from 'react';
import <%=entity%>Editor from './<%=entity%>Editor.js';
const <%=entity%>List = (data) => {

    const renderData = (input) => {
        return input.map((d) => {
            return <ul style="list-style-type:none; display:flex;">
            <% for (let i = 0; i < entityFields.length; i++) { %>
            <l1>d.<%=entityFields[i]['name']%></l1>
            <% } %>
            <li>Button</li>
        </ul>
        });
    }
    
    return <div>
        <div id="head">
            <ul style="list-style-type:none; display:flex;">
                <% for (let i = 0; i < entityFields.length; i++) { %>
                <l1><%=entityFields[i]['name']%></l1>
                <% } %>
                <l1>Operation</l1>
            </ul>
        </div>
        <div id="body">
            {renderData(data)}
        </div>
    </div>
}
    
export default <%=entity%>List;
`;
const editorTemplate = `
import React from 'react';
const <%=entity%>Editor = (delete<%=entity%>, update<%=entity%>) => 
	<div>
		<button onClick={delete<%=entity%>}>Delete</button>
		<button onClick={update<%=entity%>}>Update</button>
	</div>
export default <%=entity%>Editor;
`;


module.exports = {tableTemplate, listTemplate, editorTemplate};
