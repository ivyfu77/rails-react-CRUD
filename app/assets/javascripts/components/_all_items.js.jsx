class AllItems extends React.Component {

	render() {
		let items = this.props.items.map((item) => {
			return (
				<Item key={item.id} handleEdit={this.props.handleEdit} item={item} />
			)
		})
		return (
			<div>
				{items}
			</div>
		)
	}
}