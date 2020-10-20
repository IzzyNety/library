import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore voluptatibus quisquam at officiis quos quia numquam non, mollitia dolorum quaerat beatae a veniam facere cum omnis iste libero obcaecati commodi.'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('Hello World')
        }
      ]
    ]
  }
}));