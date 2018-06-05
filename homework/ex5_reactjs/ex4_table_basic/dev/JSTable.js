import React from 'react';
import ReactDOM from 'react-dom';

export default class JSTable extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			headerData: props.headerData,
			bodyData: props.bodyData,
		}
	}

	render() {
		return (
				<table>
					<thead>
						<JSTableHeader headerData={this.state.headerData} />
					</thead>
					<tbody>
						{this.state.bodyData.map(
							(val, key) => (<JSTableRow key={key} rowData={val} />)
						)}
					</tbody>
				</table>
		);
	}
}

class JSTableHeader extends React.Component {
	render() {
		if (!this.props.headerData)
			return null;
		else
			return (
				<tr>
					{this.props.headerData.map((val, key) =>
						(<th key={key}>{val}</th>)
					)}
				</tr>
			);
	}
}

class JSTableRow extends React.Component {
	render() {
		if (!this.props.rowData)
			return null;
		else
			return (
				<tr>
					{this.props.rowData.map((val, key) =>
						(<td key={key}>{val}</td>)
					)}
				</tr>
			);
	}
}