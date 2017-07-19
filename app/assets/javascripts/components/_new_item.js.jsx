class NewItem extends React.Component {

	render() {
		return (
			<div>
				<p>NAME: <input id='name' placeholder='Enter the name of the item' /></p>
				<p>DESC: <input id='description' placeholder='Enter a description' /></p>
				<button onClick={this.props.handleClick}>Submit</button>
			</div>
		)
	}
}