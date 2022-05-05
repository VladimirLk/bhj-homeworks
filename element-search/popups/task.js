const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const succesBtn = document.querySelector('.btn')
const modalSucces = document.getElementById('modal_success');

modal.classList.add('modal_active');

closeModal = () => {
  modal.classList.remove('modal_active')
  closeBtn.removeEventListener('click', closeModal);
}
closeBtn.addEventListener('click', closeModal);


succesModal = () => {
  modalSucces.classList.add('modal_active');    
}
succesBtn.addEventListener('click', succesModal);


//не могу понять почему не закрывается окно полсе "хорошо сделано"









