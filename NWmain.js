// Create an empty context menu
const menu = new nw.Menu();

// Add some items with label
menu.append(
  new nw.MenuItem({
    label: 'FullScreen',
    click: function() {
      nw.Window.get().toggleFullscreen();
      nw.Window.get().reload();
    }
  })
);
menu.append(
  new nw.MenuItem({
    label: 'Reload',
    click: function() {
      nw.Window.get().reload();
    }
  })
);
menu.append(new nw.MenuItem({ type: 'separator' }));
menu.append(new nw.MenuItem({ label: 'Item C' }));

// Hooks the "contextmenu" event
document.body.addEventListener(
  'contextmenu',
  function(ev) {
    // Prevent showing default context menu
    ev.preventDefault();
    // Popup the native context menu at place you click
    menu.popup(ev.x, ev.y);

    return false;
  },
  false
);
