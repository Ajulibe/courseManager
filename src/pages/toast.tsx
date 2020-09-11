export const toast = async (message: string, duration = 2000) => {
  const toast = document.createElement("ion-toast");
  toast.message = message;
  toast.duration = duration;
  toast.classList.add("ion-text-center");

  document.body.appendChild(toast);
  return toast.present();
};
