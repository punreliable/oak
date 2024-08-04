export function showModal() {
	const dialog = document.getElementById("dialog-default") as HTMLDialogElement;
	dialog?.showModal();
  };
  
  export function closeModal() {
	const dialog = document.getElementById("dialog-default") as HTMLDialogElement;
	dialog?.close();
  };

  export function showNavModal() {
	const dialog = document.getElementById("dialog-navigation") as HTMLDialogElement;
	dialog?.showModal();
  };
  
  export function closeNavModal() {
	const dialog = document.getElementById("dialog-navigation") as HTMLDialogElement;
	dialog?.close();
  };
