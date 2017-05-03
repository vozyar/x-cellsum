class TableModel {
	constructor (numCols=8, numRows=16) {
		this.numCols = numCols;
		this.numRows = numRows;
		this.data = {};
	}
	_getCellId(location) {
		return `${location.col}:${location.row}`;
	}

	getValue(location) {
		return this.data[this._getCellId(location)];
    }
		setValue(location, value) {
			this.data[this._getCellId(location)] = value;
		}
	}
module.exports = TableModel;