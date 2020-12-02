/**
 * @name ChannelCollapse
 * @author João Capucho
 * @description Adds a button and keybinding to collapse the channel sidebar
 * @version 0.0.1
 * @website https://github.com/JCapucho/BDChannelCollapse
 * @source https://github.com/JCapucho/BDChannelCollapse/blob/master/channelcollapse.plugin.js
 */
const IconHTML = `
<svg width="24" height="24" viewBox="0 0 24 24" class="icon-22AiRD da-icon" x="0" y="0" aria-hidden="false">
	<rect fill="currentColor" y="3" width="24" height="4" rx="2"></rect>
	<rect fill="currentColor" y="10.5" width="24" height="4" rx="2"></rect>
	<rect fill="currentColor" y="18" width="24" height="4" rx="2"></rect>
</svg>
`;

let listener = function (event) {
	if (event.ctrlKey && event.key === "b") {
		toggleSideBar();
	}
}

function toggleSideBar() {
	let sidebar = document.querySelector('.sidebar-2K8pFh');
	sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
}

module.exports = class ChannelCollapseButton {
	start() {
		this.addToolbarItem();
		document.addEventListener('keyup', listener, false);
	}

	stop() {
		let node = document.querySelector('.show-channels-button');
		if (node.remove) {
			node.remove();
		}
		document.querySelector('.sidebar-2K8pFh').style.display = 'flex';
		document.removeEventListener('keyup', listener, false);
	}

	onSwitch() {
		this.addToolbarItem();
	}

	addToolbarItem() {
		if (document.querySelectorAll('.show-channels-button').length == 0) {
			let collapseButton = document.createElement('div');
			collapseButton.classList.add('show-channels-button');
			collapseButton.classList.add('iconWrapper-20rFZ1');
			collapseButton.classList.add('da-iconWrapper');
			collapseButton.classList.add('clickable-3rdHwn');
			collapseButton.classList.add('da-clickable');
			collapseButton.setAttribute('aria-label', 'Collapse side bar');
			collapseButton.setAttribute('role', 'button');
			collapseButton.tabIndex = 0;
			collapseButton.style.marginLeft = "8px";
			collapseButton.style.marginRight = "8px";
			collapseButton.innerHTML = IconHTML;

			document.querySelector('.children-19S4PO').insertBefore(collapseButton, document.querySelector('.children-19S4PO>.da-iconWrapper'));

			collapseButton.addEventListener('click', toggleSideBar);
		}
	}
}
