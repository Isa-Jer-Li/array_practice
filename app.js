let data = [
	{
		name: 'Isabelle',
		age: '24'
	},
	{
		name: 'Sara',
		age: '19'
	},
	{
		name: 'Timothy',
		age: '50'
	},
	{
		name: 'Jon',
		age: '34'
	}
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
	return (
		'<div>' + item.name + '</div>'
	)

})

info.innerHTML = details.join('\n');