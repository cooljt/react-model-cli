const tableTemplate = `
import React from 'react';
import <%=entity%>List from './<%=entity%>List.js';
const <%=entity%>Table = () => 
	<div>
		<<%=entity%>List />
	</div>
export default <%=entity%>Table
`;

const listTemplate = `
import React from 'react';
import <%=entity%>Editor from './<%=entity%>Editor.js';
const <%=entity%>List = (data) => 
    <div>
        <div id="head">
		    <ul style="list-style-type:none; display:flex;">
			    <% for (let i = 0; i < entityFields.length; i++) { %>
			    <l1><%=entityFields[i]['name']%></l1>
                <% } %>
                <l1>Operation</l1>
            </ul>
        </div>
        <div id="body">
            <ul style="list-style-type:none; display:flex;">
                #actual data
            </ul>
        </div>
	</div>
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
