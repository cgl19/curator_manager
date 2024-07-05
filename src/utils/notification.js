import { toast } from 'react-hot-toast';

export function toastSuccess(msg) {
  toast.success(msg);
}

export function toastError(msg) {
  toast.error(msg);
}
export function toastOnly(msg){
    toast(msg);
}