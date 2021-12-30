// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
	// Hide items in JEI here
	event.hide('crimsonshammers:hammer_wooden')
	event.hide('crimsonshammers:hammer_stone')
	event.hide('crimsonshammers:hammer_golden')
	event.hide('crimsonshammers:hammer_copper')

	event.hide('crimsonshammers:excavator_wooden')
	event.hide('crimsonshammers:excavator_stone')
	event.hide('crimsonshammers:excavator_golden')
	event.hide('crimsonshammers:excavator_copper')

	event.hide('crimsonshammers:lumber_wooden')
	event.hide('crimsonshammers:lumber_stone')
	event.hide('crimsonshammers:lumber_golden')
	event.hide('crimsonshammers:lumber_copper')

	event.hide('crimsonshammers:handle_wooden')
	event.hide('crimsonshammers:handle_stone')
	event.hide('crimsonshammers:handle_golden')
	event.hide('crimsonshammers:handle_copper')
	event.hide('crimsonshammers:handle_netherite')
})