(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      close1ModalBtn: document.querySelector("[data-modal-close1]"),
      close2ModalBtn: document.querySelector("[data-modal-close2]"),
      close3ModalBtn: document.querySelector("[data-modal-close3]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.close1ModalBtn.addEventListener("click", toggleModal);
    refs.close2ModalBtn.addEventListener("click", toggleModal);
    refs.close3ModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();