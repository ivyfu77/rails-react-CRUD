//Define the minimum Item component
class Item extends React.Component {

	constructor() {
		super();
		this.state = { editable: false };
	}

	clickEdit(e) {
		let self = this;
		if (self.state.editable) {
			let name = $("#edit_name_"+self.props.item.id).val();
			let description = $("#edit_description_"+self.props.item.id).val();
			let item = {id: self.props.item.id , name: name , description: description};
			self.props.handleEdit(item);
		}
		self.setState({editable: !self.state.editable});
	}

	render() {
		const {item} = this.props;
		let name = (this.state.editable) ? (<input id={'edit_name_'+item.id} type='text' defaultValue={item.name} />) : 
					(<h3>{item.name}</h3>);
		let description = (this.state.editable) ? (<input id={'edit_description_'+item.id} type='text' defaultValue={item.description} />) :
					(<p>{item.description}</p>);
		return (
			<div key={item.id}>
				{name}
				{description}
				<button onClick={this.props.handleDelete} name={item.id}>Delete</button>
				<button onClick={() => this.clickEdit()} name={item.id}>{this.state.editable ? 'Submit' : 'Edit'}</button>
			</div>
		)
	}
}