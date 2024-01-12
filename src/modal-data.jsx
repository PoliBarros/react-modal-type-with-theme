export const modalData = [
  {
    id: 1,
    name: 'Simple Modal',
    isOpen: false,
    content: <p>Simple Modal content goes here.</p>
  },
  {
    id: 2,
    name: 'Popover Modal',
    isOpen: false,
    popover: true
  },
  {
    id: 3,
    name: 'Toggle Modals',
    isOpen: false,
    labelSecondary: 'Open second modal',
    nextModal: 4,
    content: <p>I'm the first modal.</p>
  },
  {
    id: 4,
    name: 'Second modal',
    isOpen: false,
    labelSecondary: 'Back to first modal',
    nextModal: 3,
    content: <p>I'm the second modal.</p>
  }
];
