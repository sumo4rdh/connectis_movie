const spiner = document.getElementById('ov');

const hide = function (elem) {
  elem.style.opacity = 0;
  setTimeout(() => {
    elem.style.visibility = 'hidden';
  }, 1000);
};
const show = function (elem) {
  elem.style.opacity = 1;
  elem.style.visibility = 'visible';
};

export default function () {
  return new Promise(((resolve, reject) => {
    show(spiner);
    setTimeout(() => {
      hide(spiner);
      resolve('done');
    }, 2000,
    );
  }));
}
