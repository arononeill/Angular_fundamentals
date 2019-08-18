import { Injectable } from '@angular/core'

// This lets angular know that we know that the object, toastr, is a global object
declare let toastr:any

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title)   
    }
    info(message: string, title?: string) {
        toastr.info(message, title)   
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title)   
    }
    error(message: string, title?: string) {
        toastr.error(message, title)   
    }
}