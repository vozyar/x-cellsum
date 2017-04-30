const TableModel = require('./table-model');
const TableView = require('./table-view');

const model = new TableModel();
const TableView = new TableView(model);
tableView.init();