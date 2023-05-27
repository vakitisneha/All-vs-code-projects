import{Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'xyz'
})
export class DataTransform implements PipeTransform{
    transform(value: any) {
        return value+"sneha";
    }
}