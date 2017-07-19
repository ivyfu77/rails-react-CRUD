class Body extends React.Component {
	constructor() {
		super();
		this.state = { items: [] };
	}

	componentDidMount() {
		$.getJSON('/api/v1/items.json', (res) => {this.setState({items: res})});
	}

	handleClick(e) {
		const name = $('#name').val();
		const description = $('#description').val();
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name, description } },
			success: (item) => {
				let newState = this.state.items.concat(item);
				this.setState({ items: newState });
			}
		})
	}

	handleDelete(e) {
		const id = e.target.name;
		const {items} = this.state;
		$.ajax({
			url: '/api/v1/items/'+id,
			type: 'DELETE',
			success: (res) => {
				console.log('successfully removed item');
				this.setState({
					items: items.filter((item) => (item.id != id))
				})
			}
		})
	}

	handleEdit(item) {
		console.log(item);
		const {items} = this.state;
		$.ajax({
			url: '/api/v1/items/'+item.id,
			type: 'PUT',
			data: { item: item },
			success: (res) => {
				console.log('successfully edited item');
				this.setState({
					items: items.map((data) => {
						if (data.id === item.id) {
							data.name = item.name;
							data.description = item.description;
						}
						return data;
					})
				})
			}
		})
	}
	render() {
		return (
			<div>
				<NewItem handleClick={() => this.handleClick()} />
				<AllItems handleDelete={(e) => this.handleDelete(e)} handleEdit={(item) => this.handleEdit(item)} items={this.state.items}/>
			</div>
		)
	}
}