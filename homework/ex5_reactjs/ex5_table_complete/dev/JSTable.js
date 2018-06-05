import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export default class JSTable extends React.Component {

	/**
	 * @param  {} props
	 * expecting headerData : array
	 * rowsData : array
	 * rowSelectedIndex : array
	 */
	constructor(props) {
		super(props);
		this.state = {
			headerData: props.headerData || [],
			rowsData: props.rowsData || [],
			rowsSelected: props.rowsSelected || [],
			
		}

		this.onRowSelected = this.onRowSelected.bind(this);

		// Register OnDelete
		this.state.onDelete = props.onDelete || this.onDelete;
		this.state.onDelete = this.state.onDelete.bind(this);
	}

	insert(rowData){
		this.state.rowsData.push(rowData);
		this.setState(this.state);
	}

	onInsert(){
		this.insert();
	}

	delete() {

		// delete
		let rowsSelected = this.state.rowsSelected;
		rowsSelected.sort(function(a,b){ return b - a; });
		let rowsData = this.state.rowsData;
		for(var rowIndex of rowsSelected){
			rowsData.splice(rowIndex, 1);
		}

		// delete selected row
		this.state.rowsSelected = [];

		// set state
		this.setState(this.state);
	}

	onDelete() {
		this.delete();
	}

	update(newRow){
		if(this.state.rowsSelected.length != 1)
			return;
	}

	onUpdate(newRow, rowIndex){
		this.state.rowsData[rowIndex] = newRow;
		this.setState(this.state);
	}

	/**
	 * @param  {} rowData 
	 * @param  {} evt
	 */
	onRowSelected(rowIndex, evt) {
		let rowsSelected = this.state.rowsSelected;
		let arrIndex = rowsSelected.indexOf(rowIndex)
		if (arrIndex > -1) {
			rowsSelected.splice(arrIndex, 1);
		} else {
			rowsSelected.push(rowIndex);
		}
		this.setState(this.state);
	}

	render() {
		var rowsElement = [];
		for (let index = 0; index < this.state.rowsData.length; index++) {
			let selected = this.state.rowsSelected.indexOf(index) > -1 ? true : false;
			let rowData = this.state.rowsData[index];
			rowsElement.push((<JSTableRow key={index} rowIndex={index} rowData={rowData} rowSelected={selected} onRowSelected={this.onRowSelected} />));
		}
		return (
			<div className="JSTable">
				<table>
					<thead>
						<JSTableHeader headerData={this.state.headerData} />
					</thead>
					<tbody>
						{rowsElement}
					</tbody>
				</table>
				<JSTableNav onDelete={this.state.onDelete}/>
			</div>
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
		let classname = (this.props.rowSelected) ? "JSTableRow-selected" : "JSTableRow";

		if (!this.props.rowData)
			return null;
		else
			return (
				<tr className={classname} onClick={this.props.onRowSelected.bind(this, this.props.rowIndex)}>
					{this.props.rowData.map((val, key) =>
						(<td key={key} >{val}</td>)
					)}
				</tr>
			);
	}
}

class JSTableNav extends React.Component {
	render() {
		return (
			<nav>
				<button onClick={this.props.onInsert}> Insert </button>
				<button onClick={this.props.onEdit}> Edit </button>
				<button onClick={this.props.onDelete}> Delete </button>
			</nav>
		)
	}
}