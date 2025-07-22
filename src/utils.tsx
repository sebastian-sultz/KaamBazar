import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { toast, type ToastContentProps } from 'react-toastify';

export const handleSuccess = (msg: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
    toast.error(msg, {
        position: 'top-right'
    })
}